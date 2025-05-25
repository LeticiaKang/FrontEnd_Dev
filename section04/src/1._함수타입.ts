/**
 * 함수 타입 정의
 */

function func1(a: number, b: number) {
  let c: string = (a + b).toString();
  return c;
}

/**
 * 화살표 함수의 타입 정의
 */
const add = (a: number, b: number) => a + b;

/**
 * 함수 매개변수
 * - 기본값 매개변수: 값이 주어지지 않으면 기본값 사용
 * - 선택적 매개변수(?): 값이 있을 수도, 없을 수도 있음
 * - 주의: 필수 매개변수는 선택적 매개변수 앞에 와야 함
 */
function introduce(name = "홍길동", age: number, tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

introduce("김머머", 27, 175);
introduce("김머머", 27); // tall은 생략 가능

/**
 * 가변 인자 (Rest Parameter)
 * - 전달된 인자들을 배열로 수집
 */
function getSum1(...rest: number[]) {
  let sum = 0;
  rest.forEach(it => (sum += it));
  return sum;
}

// 튜플 타입으로 3개의 인자만 받도록 제한
function getSum2(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach(it => (sum += it));
  return sum;
}

getSum1(1, 2, 3);
getSum1(1, 2, 3, 4, 5, 6);
getSum2(1, 2, 3);
getSum2(1, 2, 3, 4, 5, 6); // ❌ 오류: 튜플은 정확히 3개의 인자만 허용

/**
 * ✅ 함수 타입 정리
 *
 * 1. 함수 선언 시 매개변수와 반환값 타입을 명시적으로 지정할 수 있다.
 *    → 명확한 타입으로 가독성과 안정성 확보
 *
 * 2. 매개변수 관련 문법
 *    - 기본값 매개변수: 초기값 지정 가능 (ex. name = "홍길동")
 *    - 선택적 매개변수: ?로 표시하며, 항상 마지막에 선언
 *    - rest 매개변수: 가변 길이 인자를 배열로 수집 (...rest)
 *
 * 3. 화살표 함수도 마찬가지로 타입 명시 가능
 *
 * 4. 튜플을 사용하면 rest 매개변수에 들어갈 인자의 개수를 정확히 제한할 수 있다.
 *
 * ⚠️ 선택적 매개변수와 튜플 타입, rest 매개변수의 사용 시 타입 범위에 유의할 것
 */
