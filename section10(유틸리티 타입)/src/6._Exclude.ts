/**
 * 조건부 타입 기반
 *
 * Exclude<T, K>
 *
 * K에 해당하는 타입을 제거한 타입을 반환한다.
 *
 */

// ------------------------------------- Exclude<T, K> ----------------------------------------

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, boolean>;
