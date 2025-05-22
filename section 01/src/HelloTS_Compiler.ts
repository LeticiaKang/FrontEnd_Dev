import { copyFileSync } from "fs";

const func = () => {
    console.log("Hello TypeScript");
    // 화살표 함수를 사용했음
}

// export 모듈 시스템 사용해서 함수를 내보냄
export const pringHello = () => {
    console.log("Hello TypeScript");
}


// strict 함수가 true이면 오류가 난다. 타입을 지정하지 않아서.
export const strictTrueError = (message) => {
    console.log(message + "Hello TypeScript");
}

const b = 1;

// export default class HelloTS_Compiler {
//   static pringHello = pringHello;
//   static func = func;
//   static strictTrueError = strictTrueError;
//   static b = b;
// }
