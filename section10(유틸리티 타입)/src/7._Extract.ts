/**
 * 조건부 타입 기반
 *
 * Extract<T, K>
 *
 * K에 해당하는 타입만 추출한다.
 *
 */

// ------------------------------------- Extract<T, K> ----------------------------------------

type Extract<T, U> = T extends U ? T : never;

type A = Extract<string | boolean, boolean>;
