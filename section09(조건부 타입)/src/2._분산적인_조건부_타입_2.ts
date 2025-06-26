/**
 * 실용적인 예제
 *
 * 1. 특정 타입만 제외하는 함수를 만들어보자.
 */
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// number, string, boolean이 들어가도, string을 제외한 타입만 남게 된다.

// 1 단계
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

// 2단계
// number
// never
// boolean

// 결과
// number | never | boolean ====> number | boolean
// never = 공집합과 같기 때문에, number | boolean로 나온다.

/**
 * 실용적인 예제
 *
 * 2. 특정 타입만 추출하는 함수 만들어보기
 */

// type Extract<T, U> = any;

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
