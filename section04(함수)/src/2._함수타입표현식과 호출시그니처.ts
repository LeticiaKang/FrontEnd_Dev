/**
 * 함수 타입 표현식
 */
// arrow function으로 아래와 같이 표현 가능
const add = (a: number, b: number) => a + b;

/**
 * 타입 별칭을 사용한 함수 타입 정의
 * - 여러 함수에 동일한 시그니처 적용 가능
 */
// 함수의 타입을 먼저 정의하고, 해당 타입으로 함수를 간단하게 정의할 수 있다.
type Operation = (a: number, b: number) => number;

const add2: Operation = (a, b) => a + b;
const sub2: Operation = (a, b) => a - b;
const multiply2: Operation = (a, b) => a * b;
const divide2: Operation = (a, b) => a / b;

/**
 * 호출 시그니처 정의 방식
 * (Call Signature)
 * - 함수도 객체로 간주되기 때문에, 속성과 호출 시그니처를 함께 정의 가능
 */
type Operation2 = {
  (a: number, b: number): number; // (매개변수) : 반환값 타입
  name?: string; // 추가 속성
};
const add3: Operation2 = (a, b) => a + b;
const sub3: Operation2 = (a, b) => a - b;
const multiply3: Operation2 = (a, b) => a * b;
const divide3: Operation2 = (a, b) => a / b;

// 사용자 정의 name 속성을 가진 함수 객체 생성
const addWithName: Operation2 = Object.assign(((a, b) => a + b) as Operation2, { name: "더하기" });
console.log(addWithName.name); // ✅ "더하기"

// 위에 처럼 우회해서 사용해도 되지만, 아래와 같이 (함수 먼저 정의 + 속성 붙이기)가 더 안전하다.
const addFunc = (a: number, b: number): number => a + b;
const addWithName2: Operation2 = Object.assign(addFunc, { name: "더하기" });

/**
 * ✅ 함수 타입 표현식 & 호출 시그니처(Call Signature) 정리
 *
 * 1. 함수 타입 표현식
 *    - 타입 별칭으로 함수의 시그니처를 정의 가능
 *    - 예: type Operation = (a: number, b: number) => number;
 *
 * 2. 호출 시그니처(Call Signature)
 *    - 함수도 객체로 간주 → 함수 + 속성을 함께 가지는 타입 정의 가능
 *    - 예: type Operation2 = { (a: number, b: number): number; name?: string }
 *
 * 3. 주의 사항
 *    - const add3: Operation2 = (a, b) => a + b; 는 타입상 허용되지만
 *      실제로 `name` 속성이 `add3.name`으로 존재하는 게 아니라,
 *      JS 함수의 내장 `Function.name` 속성만 반환됨
 *    - 직접 `name: "..."`을 지정하고 싶으면 `Object.assign()` 또는 함수 객체 생성 필요
 *
 * 4. 하이브리드 함수 객체 만들기
 *    - 예:
 *      const addHybrid: Operation2 = Object.assign(
 *        (a:number, b:number) => a + b,
 *        { name: "더하기" }
 *      );
 *      addHybrid(1, 2);       // 호출 OK
 *      console.log(addHybrid.name); // "더하기"
 *
 *   >>>>
 */

/**
 * >>> 아래와 같이 validator 코드 중복을 줄이고, 재사용을 늘릴 수 있다.
 * export type Validator = {
        (value: string): boolean;
        field: string;
        message: string;
    };

    // 공백 금지
    export const isNotEmpty: Validator = Object.assign(
        (value) => value.trim().length > 0,
        { field: "name", message: "이름을 입력하세요." }
    );

    // 이메일 유효성
    export const isEmail: Validator = Object.assign(
        (value) => value.includes("@") && value.includes("."),
        { field: "email", message: "이메일 형식이 아닙니다." }
    );
 */
