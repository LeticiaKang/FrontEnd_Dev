/**
 * 제네릭 ; 일반적인, 포괄적인 함수
 */
function func1(value: unknown) {
  return value;
}
let str = func1("hello");
let num = func1(1);
str.toUpperCase(); // ❌ 에러 : unknown 타입이라. string임에도 불구하고 에러 발생

// 자동으로 인지하지 못하고 아래와 같이 조건문을 걸어줘야 한다.
if (typeof str === "string") {
  str.toUpperCase();
}

// 이럴 때 사용하는 것이 ----> 제네릭
// 타입 변수로 변수를 바꿔준다
function func2<T>(value: T): T {
  return value;
}

/**
 * 각각 string, number로 return타입이 나온다
 *
 * 타입 결정은 ==== value 값이 들어갈 때 결정된다.
 *
 * 범용적으로 사용할 수 있다.
 */
let str2 = func2("hello");
let num2 = func2(1);

/**
 * 프로그래머가 명시적으로 선언할 수 있다.
 *
 * 함수를 호출하면서 타입을 선언할 수 있음.
 */
let arr = func2<[number, number, number]>([1, 2, 3]);
