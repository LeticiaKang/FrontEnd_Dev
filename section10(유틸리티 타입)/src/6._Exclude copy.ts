/**
 * 조건부 타입 기반
 *
 * RetunType<T, K>
 *
 * 함수의 반환값 타입을 추출한다.
 *
 */

// ------------------------------------- RetunType<T, K> ----------------------------------------
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

/**
 * T extends (...args: any[]) => any
 *    : 어떤 함수타입이 들어와도 T는 서브타입이 된다.
 */

function funcA() {
  return "hello";
} // 타입 : string

function funcB() {
  return 10;
}
