/**
 * 함수 오버로딩
 */

/**
 * 하나의 함수 func를 만들고,
 * 모든 매개변후 타입은 number로 지정.
 *
 * 매개변수가 1개 있으면 --> 매개변수에 20을 곱하고
 * 매개변수가 3개 있으면 --> 매개변수를 모두 더한 값을 출력
 */
const func = (...rest: number[]): void => {
  let rslt: number = 0;
  let restCnt = resizeTo.length;
  if (restCnt === 1) {
    rest.forEach((el) => (rslt = el * 20));
  } else {
    rest.forEach((el) => (rslt += el));
  }
  console.log(rslt);
};

// 오버로드 시그니처: 함수 종류는 아래와 같이 있다.
function func1(a: number): void;
function func1(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니처
// function func1() {}

// func1(1);
// func1(1, 2, 3);
// func1();         // ❌ 오류: 실제 구현부가 있더라도 오버로딩 시그니처를 따르기 때문에, 해당 유형의 시그니처가 없음
// func1(1, 2);     // ❌ 오류: 정의된 시그니처 없음

// function func1(a: number, b: number, c: number) {
//   a.toFixed();
//   b.toFixed();
//   c.toFixed();
// } // 이렇게 사용하면 매개변수 1개인 오버로드 시그니처는 아예 정의될 필요가 없었기 때문에 오류가 난다.

// 실제 구현부 (하나만 존재해야 한다)
function func1(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func1(1);
func1(1, 2, 3);

/**
 * 함수 오버로딩 요약
 *
 * 1. 오버로드 시그니처
 *    - 외부에 노출되는 함수의 형태 (선언만 존재)
 *    - 여러 개 작성 가능
 *
 * 2. 구현 시그니처
 *    - 실제 함수 구현은 단 하나만 존재
 *    - 매개변수를 전부 optional로 처리하고 내부에서 분기 처리
 *
 * 3. 호출 시
 *    - 오버로드 시그니처 중 하나에 정확히 일치해야 호출 가능
 *    - 정의되지 않은 인자 개수/타입으로 호출하면 오류 발생
 *
 * 4. 사용 목적
 *    - 함수 사용 시 다양한 인자 조합을 허용하고,
 *      타입 안전하게 다양한 동작을 제공하고 싶을 때 사용
 */
