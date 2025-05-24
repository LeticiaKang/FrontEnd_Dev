/**
 * 타입 추론
 * 1. 어떤 상황에서 타입을 추론하는가?
 * 2. 어떤 원리로 추론하는지?
 */

// 굳이 타입을 하나씩 정의하지 않아도, 타입 추론을 통해 코드를 간결하게 만들 수 있다.
let a = 10; // 자동으로 변수 a를 number로 추론한다.
let b = "hello";
/**
 * 1-1. 변수에 최초 선언된 값을 기반으로 추론한다.
 */
let c = {
    id: 1,
    name: "홍길동",
    profile: {
        nickname: "hong",
    },
    urls: ["https://www.naver.com"],
};

let { id, name, profile } = c; //추론 예시

let [one, two, three] = [1, 'hello', true];

// 함수의 return 값을 추론
function func(message = "hello") {
    return "hello";
};

/**
 * 1-2. 추론할 값이 있으면 추론이 가능하고, 없으면 X
 */

let d;  //any 타입으로 추론
d = 10;
d.toFixed();    // number로 추론
// d.toUpperCase();

d = "hello";
d.toUpperCase(); // string으로 추론
// d.toFixed();

/**
 * any 타입의 "진화" (TypeScript의 추론 기능)
 *      ---> 별로 추천하지는 않음. 코드 짠 사람이 아니면 찾아야 하기 때문에
 * let d; 는 암묵적으로 any라고 한다.
 * 36번째 줄 : any ---> number로
 * 41번째 줄 : any ---> string로
 */

/**
 * typeScript에서 const 키워드로 변수를 선언하고 값을 할당하면,
 * 해당 변수의 타입은 할당된 값의 리터럴 타입으로 추론
 */
const num = 10;
const str = "hello";

// 배열 안에 number와 string 두 타입이 들어 있으므로,
// TypeScript는 이 배열을 number | string의 배열로 추론한다.
let arr1 = [1, "string"];    //let arr: (string | number)[] 으로 추론한다.

// const를 쓰면 배열의 요소 값 자체가 리터럴 타입으로 고정됩니다.
// 즉, readonly [1, "string"]처럼 튜플로 추론한다.
const arr2 = [1, "string"];




/**
 * ✅ 타입 추론 요약
 *
 * 1. 타입스크립트는 명시적인 타입 선언이 없어도 코드의 문맥과 값에 따라 타입을 추론함.
 *
 * 2. 타입 추론이 일어나는 대표적인 상황
 *    - 변수 선언 시 초기값이 있을 경우 (예: let a = 10 → number)
 *    - 객체 구조 분해 할당 (예: let { id } = obj → id의 타입 추론)
 *    - 배열 구조 분해 할당 (예: let [x, y] = [1, 'hi'] → number, string)
 *    - 함수의 return 값
 *
 * 3. 타입 추론의 원리
 *    - 초기값을 기준으로 타입을 자동 유추
 *    - `let`은 값의 타입을 일반 타입으로 추론 (예: number, string)
 *    - `const`는 값 자체를 리터럴 타입으로 추론 (예: 10, "hello")
 *
 * 4. any 타입의 진화
 *    - 초기 선언 시 타입이 없는 변수 (`let d;`)는 암시적 any로 간주됨
 *    - 이후 사용되는 방식에 따라 타입이 점진적으로 추론됨
 *    - 하지만 이는 타입 안전성이 낮아져 추천되지 않음
 *
 * 5. 배열 타입 추론
 *    - `let arr = [1, "hi"]` → (number | string)[]
 *    - `const arr = [1, "hi"]` → readonly [1, "hi"] (튜플 + 리터럴 타입)
 *
 * 6. 권장 사항
 *    - 명확한 타입이 필요한 경우 직접 타입 선언을 사용
 *    - `noImplicitAny` 옵션을 통해 암시적 any 사용을 방지
 *    - 가능한 한 추론을 활용하되, 협업 시 가독성과 유지보수를 고려하여 필요한 곳에는 타입을 명시할 것
 */
