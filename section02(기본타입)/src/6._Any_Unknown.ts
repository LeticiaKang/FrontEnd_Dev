// ----------------------- Any ----------------------- //
// 특정 변수의 타입을 확실하게 모를 때
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => {}; //함수까지 가능
// 또한. 메서드도 모두 사용 가능하다.
anyVar.toUpperCase();
anyVar.toFixed();

// 모든 변수에 대입이 가능하다.
let num: number = 10;
num = anyVar;   // anyVar.toUpperCase is not a function TypeError발생하다. 마지막 선언이 함수인데 그걸 num에 대입해서.



// ----------------------- Unknown ----------------------- //
// 특정 변수의 타입을 확실하게 모를 때
let unknownVar: unknown = 10;
unknownVar = "hello";
unknownVar = true;
unknownVar = {};

// any타입과 다른 점은. 다른 변수에 대입할 수 없다.
// num = unknownVar; // 'unknown' 형식은 'number' 형식에 할당할 수 없습니다
// unknownVar.toUpperCase(); //'unknown' 형식에 'toUpperCase' 속성이 없습니다.

// 타입 정제를 했을 경우에만 any처럼 사용할 수 있다.
// 그래서 타입을 모를 경우 "unknown"타입을 사용하는 것이 좋다.
if( typeof unknownVar === "string" ) {
    unknownVar.toUpperCase();
}