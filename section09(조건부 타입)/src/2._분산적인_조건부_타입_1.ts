/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends string ? number : string;

let a: StringNumberSwitch<string>; // 타입 :number
let b: StringNumberSwitch<number>; // 타입 :string

/**
 * 조건부 타입을 유니온과 함께 사용할 때,
 * 조건부 타입이 분산적으로 작동하는 것이다.
 */

/**
 * 아래와 같이 유니옴 타입이 있으면,
 *
 * [ number의 결과 / string의 결과 ] 이렇게 분리되어서 들어간다.
 *
 * 그래서 c의 타입을 보면 string | number 로 나온다.
 */
let c: StringNumberSwitch<number | string>; // 타입: string | number
