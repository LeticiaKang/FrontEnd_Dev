/**
 * 타입변수 응용하기
 */
/**
 * 1번 사례. 2개의 제네릭 사용하는 경우
 */
function swap<T, U>(a: T, b: U) {
  return [b, a];
}
const [a, b] = swap("1", 2);

/**
 * 2번 사례.
 */
function returnFirstValue(data: any) {
  return data[0];
}
let num = returnFirstValue([0, 1, 2]); // 0 --> any로 추론
let str = returnFirstValue(["hello", "hi", "Ts"]); // hello --> any로 추론

function returnFirstValue2<T>(data: T) {
  return data[0]; // ❌ : data를 unknown 타입으로 추론하기 때문에, 오류 발생
}
let num2 = returnFirstValue2([0, 1, 2]); // 0 --> any로 추론
let str2 = returnFirstValue2(["hello", "hi", "Ts"]); // hello --> any로 추론

function returnFirstValue3<T>(data: T[]) {
  return data[0];
}
let num3 = returnFirstValue3([0, 1, 2]); // return값을 number로 추론
let str3 = returnFirstValue3(["hello", "hi", "Ts"]); // return값을 string으로 추론

// 여러 타입이 배열에 섞인 경우.
let rtnV1 = returnFirstValue3([1, "hi", "Ts"]);
// ==> 튜블 타입으로 선언한다.(첫번째 타입은 아는데, 뒤에 오는 배열은 모르겠어)
function returnFirstValue4<T>(data: [T, ...unknown[]]) {
  return data[0];
}
let rtnV2 = returnFirstValue4([1, "hi", "Ts"]);

/**
 * 3번째 사례.
 */
function getLength(data: any) {
  return data.getLength;
}
let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("1232131"); // 7
let var3 = getLength({ length: 10 }); //10
let var4 = getLength(10);

// number 타입의 객체의 프로퍼티를 가지고 있는 타입으로 T를 제한한다
// --> 타입변수에 제한을 걸 수 있다.
function getLength2<T extends { length: number }>(data: T) {
  return data.length;
}
let var12 = getLength2([1, 2, 3]); // 3
let var22 = getLength2("1232131"); // 7
let var32 = getLength2({ length: 10 }); //10
let var42 = getLength2(10);
