/**
 * 조건부 타입
 * Conditional Types
 */

// 삼항연산자를 이용해 조건부 타입을 구현할 수 있다.
type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 조건부 타입은 제네릭과 사용될 때, 유용합니다.
 *
 * 제네릭과 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string : number;
// T에 들어오는 값이 number이면 string, string이면 number가 된다.

let varA: StringNumberSwitch<number>; // 타입 :string

let varB: StringNumberSwitch<string>; // 타입 :number

// function removeSpaces(text: string) {
//   return text.replace(" ", "");
// }
/**
 * 매개변수가 string이면 모두 가능했지만, 유니온으로 변경 하는 경우
 * function 내부에서도 조건문으로 분기를 태워야하고,
 * 타입 단언을 세워야 한다.
 *
 * 이럴 때, 제네릭을 사용한다.
 */

function removeSpaces2<T>(text: T): T extends string ? string : undefined {
  if (typeof text === "string") {
    /**
     * 'string' 형식은 'T extends string ? string : undefined' 형식에 할당할 수 없습니다
     * 위와 같은 오류 발생.
     */
    return text.replace(" ", "");
  } else {
    return undefined;
  }
}

/**
 * 함수 오버로딩을 이용해서 해결 수 있다.
 */
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replace(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im typescript");
result.toUpperCase();
