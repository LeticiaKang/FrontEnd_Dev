// #### 원시타입 #### 

// 1. number 타입 - 실수, 무한대, 음의 무한대, NaN(Not a Number)
let num1: number = 1;  // 타입주석(Type annotation)
let num2: number = -1;
let num3: number = 3.14;
let num4: number = -3.14;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// num1 = "hello"; //이런식으로 number 타입에 문자열을 쓰면 오류가 난다.



// 2. String : 문자열
let str1: string = "Hello";
let str2: string = 'Hello';
let str3: string = `Hello`;
let str4: string = String(123);
let str5: string = `hello ${num1}`;
// str1 = 1; // 이런식으로 string 타입에 숫자를 쓰면 오류가 난다.         


// 3. boolean : true, false
let bool1: boolean = true;
let bool2: boolean = false;


// 4. null, undefined
let null1: null = null;
let undefined1: undefined = undefined;

// strictNullChecks 옵션 설명
let numA: number = null;

// 리터럴 타입(원시타입에 상속된 타입)
// 원시타입에 해당하는 타입 중 하나를 정의하면 된다. 
let numB: 10 = 10;
// numB = 20; //이렇게 10이 아닌 다른 값을 넣으려고 하면 오류가 난다.
let stringA: "사용자" = "사용자";
// stringA = "사용자2"; //오류
