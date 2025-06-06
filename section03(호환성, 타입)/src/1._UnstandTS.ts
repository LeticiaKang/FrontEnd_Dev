/**
 * Unknown 타입 : 모든 타입의 Super 타입
 */
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
  // 모든 타입의 super타입이라
  // 모든 타입이 upCast가능하다.

  let unknownVar: unknown;
  // let numVar: number= unknownVar; // downCast 불가
  // let strVar: string = unknownVar;
  // let boolVar: boolean = unknownVar;
  // let nullVar: null = unknownVar;
  // let undefinedVar: undefined = unknownVar;
}

/**
 * Never 타입 : 모든 타입의 Sub 타입  ---> 공집합
 */
function neverExam() {
  // downCast 불가
  // let a: never = 1;
  // let b: never = "hello";
  // let c: never = true;
  // let d: never = null;
  // let e: never = undefined;

  function neverFunc(): never {
    throw new Error("error");
  }

  // upCast가능
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
}

/**
 * void 타입 : undefined의 super타입
 */
function voidFunc() {
  function printHello(): void {
    console.log("hello");
    return undefined;
  }

  // void이지만 return을 undefined로 쓸 수 있다.
}

/**
 * Any타입
 */
function anyExam() {
  let unknownVar: unknown;
  let undefinedVar: undefined;
  let neverVar: never;
  let numVar: number = 10;
  let anyVar: any;
  anyVar = numVar;
  anyVar = unknownVar;
  unknownVar = anyVar;
  anyVar = undefinedVar;
  undefinedVar = anyVar;

  // up, down 모두 가능하다.

  // 하지만 never는 up/down 불가
  // anyVar = neverVar;
  // neverVar = anyVar;

  // undefined > never
  // neverVar = undefinedVar;
  // undefinedVar = neverVar;
}
