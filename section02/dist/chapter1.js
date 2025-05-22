// #### 원시타입 #### 
// 1. number 타입 - 실수, 무한대, 음의 무한대, NaN(Not a Number)
let num1 = 1; // 타입주석(Type annotation)
let num2 = -1;
let num3 = 3.14;
let num4 = -3.14;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// num1 = "hello"; //이런식으로 number 타입에 문자열을 쓰면 오류가 난다.
// 2. String : 문자열
let str1 = "Hello";
let str2 = 'Hello';
let str3 = `Hello`;
let str4 = String(123);
let str5 = `hello ${num1}`;
// str1 = 1; // 이런식으로 string 타입에 숫자를 쓰면 오류가 난다.         
// 3. boolean : true, false
let bool1 = true;
let bool2 = false;
// 4. null, undefined
let null1 = null;
let undefined1 = undefined;
// strictNullChecks 옵션 설명
let numA = null;
// 리터럴 타입(원시타입에 상속된 타입)
// 원시타입에 해당하는 타입 중 하나를 정의하면 된다. 
let numB = 10;
// numB = 20; //이렇게 10이 아닌 다른 값을 넣으려고 하면 오류가 난다.
let stringA = "사용자";
export {};
// stringA = "사용자2"; //오류
