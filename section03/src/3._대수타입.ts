/**
 * 대수 타입
 * : 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 *  --> 합집합 타입과 교집합 타입이 존재한다.
 */

/**
 * 1. 합집합 - Union 타입
 */
let a: string | number | boolean; // 변수 a는 string과 number의 Union 타입이다.
// 그래서 숫자과 문자 모두 부여 가능하다.
a = "str";
a = 1;
a = true;

let arr: (number | string | boolean)[] = [1, true, 'hello'];

type Union1 = Dog | Person

let union1: Union1 = {
    name: "",
    color: "",
};

let union2: Union1 = {
    name: "",
    language: "",
};

let union3: Union1 = {
    name: "",
    color: "",
    language: "",  // Dog + Person → 둘 다 포함되어 있어도 허용됨 (부분집합도 포함)
};

// ❌ Dog도 아니고 Person도 아님
// let union4: Union1 = {
//     name: "",
// };

/**
 * 2. 교집합 - Intersection타입
 */
let variable : number & string;  //variable의 교집합 영역이 없기 때문에 variable은 never타입이라고 뜬다.

type Dog = {
    name: string,
    color: string,
};

type Person = {
    name: string,
    language: string,
};

type Intersection = Dog & Person;

let intersection1: Intersection = {
    name: "",        // 공통 속성
    color: "",       // Dog 속성
    language: "",    // Person 속성
  }; // 모든 속성 만족 -- 만약 속성이 하나라도 빠지면 오류가 발생합니다.

