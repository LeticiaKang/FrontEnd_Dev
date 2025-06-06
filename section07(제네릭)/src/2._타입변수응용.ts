// ******** 제네릭 **********

/**
 * 1번 사례
 * 타입을 여러개 사용해야 하는 경우.
 */
function swap<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}
// 두개의 타입이 다른 경우, 각각 다른 타입을 선언한다.
const [a, b] = swap("1", 2);

/**
 * 2번째 사례
 */
// function returnFirstValue(data: any) {
//   return data[0];
// }
// let num = returnFirstValue([1, 2, 3]); // 1 : any타입
// let str = returnFirstValue(["hello", "bello", "cello"]); // hello : any타입

function returnFirstValue<T>(data: T) {
  return data[0]; // 타입이 미정이라 T를 unknown 타입으로 추론한다.
}
let num = returnFirstValue([1, 2, 3]); // 1 : any타입
let str = returnFirstValue(["hello", "bello", "cello"]); // hello : any타입
