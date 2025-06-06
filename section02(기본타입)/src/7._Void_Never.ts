// ------------------ Void ------------------ //
// 공허 ----> 아무것도 없음을 의미하는 타입

// return값이 없는 함수
function printHello(): void {
    console.log("hello");
}

// 문자열을 반환하는 함수
function printHello2(): string {
    return "hello";
}


// 변수에 void 타입을 지정할 경우
let a : void;
a = undefined;  //void는 오직 undefined만 넣을 수 있음
// a = null;       // strictNullCheck가 false면 null도 넣을 수 있음
// a = 1;  
// a = {};



// ------------------ Never ------------------ //
// 존재하지 않는 ----> 불가능한 타입
//function func3(): void {
function func3(): never {
    while(true) {
        // while문을 무한 반복되는데, void를 쓰는 것은 적절해보이지 않는다.
        // 이럴 경우, never를 쓴다.
    }
};

// 그래서 에러 발생할 때 사용한다.
function func4(): never {
    throw new Error("error");
};

let a1: never;
// a1 = null; // never에는 null도, 어떤 값도 넣을 수 없음.