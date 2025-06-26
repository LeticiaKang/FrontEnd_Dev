/**
 * infer
 *
 * inference(추론)
 *
 * 조건부 타입에서 특정 타입만 추론할 수 있다.
 */

type FuncA = () => string;

type ReturnType<T> = T extends () => string ? string : never;

type A = ReturnType<FuncA>;

// ----------------------------

type FuncB = () => number;

type B = ReturnType<FuncB>;
// number는 string의 서브타입이 아니기 때문에, never가 된다.

/**
 * 하지만, 내가 하고 싶었던 것은 string이면 string으로,
                                 number면 number로 나오는 것
 */
type ReturnType2<T> = T extends () => infer R ? R : never;
type A2 = ReturnType2<FuncA>; // 타입 : string
type B2 = ReturnType2<FuncB>; // 타입 : number

/**
 * infer와 있는 R 타입은
 * 조건식이 참이 되도록 동작한다.
 */

type C = ReturnType2<number>; // 타입 : never
/**
 * func형태가 아닌 단순 number가 들어가면,
 * number는 어떤 경우에도 () => R의 서브타입을 만들 수 없기 때문에   ------> 추론불가
 * never가 된다.
 */

// -------------------------------------------------------------------------------

/**
 * 예제
 *
 * 1. T는 프로미스 타입이어야 한다.
 * 2. 프로미스 타입의 결과값을 반환해야 한다.
 */
type PromiseUnpack<T> = any;

type PromiseA = PromiseUnpack<Promise<string>>; // string이 나오게 하고 싶음.
type PromiseB = PromiseUnpack<Promise<number>>; // number를 나오게 하고 싶음.

type PromiseUnpack2<T> = T extends Promise<infer R> ? R : never;

type PromiseA2 = PromiseUnpack2<Promise<string>>;
type PromiseB2 = PromiseUnpack2<Promise<number>>;
