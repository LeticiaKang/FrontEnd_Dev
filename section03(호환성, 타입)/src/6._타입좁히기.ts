/**
 * 타입 좁히기
 *
 * 타입스크립트에서 `유니언 타입`으로 선언된 값을,
 * 조건문 등을 통해 특정 타입으로 한정시키는 과정.
 * 예: string | number → if문 통해 string 또는 number로 좁히기
 */

// value => number : toFixed
// value => string : toUpperCase
function func(value: number | string) {
    value;  //value: string | number 으로 추론
    // value.toFixed();        // ❌오류
    // value.toUpperCase();    // ❌오류

    // 타입 가드
    if (typeof value === "number"){
        console.log(value.toFixed());       // number로 좁혀짐
    } else if (typeof value === "string"){
        console.log(value.toUpperCase());   // string로 좁혀짐
    }
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
function func2(value: number | string | Date) {
    if (typeof value === "number"){
        console.log(value.toFixed());
    } else if (typeof value === "string"){
        console.log(value.toUpperCase());
    } else if (typeof value === "object"){ // Date 타입이 들어온다고 가정
        console.log(value.getTime());
    }
};


// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
function func3(value: number | string | Date | null) {
    // typeof null === "object" → 주의!
    if (typeof value === "number"){
        console.log(value.toFixed());
    } else if (typeof value === "string"){
        console.log(value.toUpperCase());
    } else if (typeof value === "object"){
        // ❌ value가 null일 수 있어서 에러 발생
        // getTime()은 null에서는 undefined 접근 에러
        console.log(value.getTime());
    }
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
function func4(value: number | string | Date | null) {
    if (typeof value === "number"){
        console.log(value.toFixed());
    } else if (typeof value === "string"){
        console.log(value.toUpperCase());
    } else if (value instanceof Date){  // null이 아니고 Date 타입인지 정확히 확인
        console.log(value.getTime());
    }
};

// 이제, 우리가 객체를 만들어보자.
type Person = {
    name: string;
    age: number;
};

function func5(value: number | string | Date | null) {
    if (typeof value === "number"){
        console.log(value.toFixed());
    } else if (typeof value === "string"){
        console.log(value.toUpperCase());
    } else if (value instanceof Date){
        console.log(value.getTime());
    }
    // Person은 런타임 클래스가 아니므로 instanceof로 검사할 수 없음
    // else if(value instanceof Person){
    // }
    else if(value && "age" in value){   // 객체 존재 여부 확인 + 속성 존재 여부 확인
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
};


/**
 * ✅ 타입 좁히기 정리
 *
 * 1. 유니언 타입으로 선언된 변수는 조건문 등을 통해 특정 타입으로 좁힐 수 있다.
 *
 * 2. 주요 타입 가드 방법:
 *    - typeof: 원시 타입 구분 (number, string, boolean 등)
 *    - instanceof: 클래스 기반 객체 구분 (Date, Error 등)
 *    - in 연산자: 특정 속성 존재 여부를 기준으로 좁히기
 *    - null 체크: value && "prop" in value 형태로 안전성 확보
 *
 * 3. null은 typeof로 판별 시 "object"이므로 instanceof 또는 null 체크를 별도로 해줘야 한다.
 *
 * 4. 사용자 정의 타입 (예: type Person)은 instanceof로 판별할 수 없으므로 속성 기반 검사를 활용해야 한다.
 *
 * ✅ 타입 좁히기를 적절히 활용하면, 타입 안정성과 가독성을 모두 높일 수 있다.
 */


