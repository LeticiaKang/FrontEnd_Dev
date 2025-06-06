/**
 * 인터페이스
 * - 객체의 구조를 정의하는 데 특화된 문법
 * - 상속, 합치기 등 타입보다 확장성이 좋음
 */

// type도 객체 구조 정의 가능
type A1 = {
  a: string;
  b: string;
};

interface A2 {
  //인터페이스 : 정해진 약속
  a: string;
  b: string;
}

// 객체의 구조를 정의하는데 특화된 문법(상속, 합침 등의 특수한 기능)
interface Person {
  readonly name: string;
  age?: number;
  sayHello(): void; // 호출 시그니처로 <- 오버로딩 시그니처를 사용하고 싶을 때도,,
  sayHello(a: number, b: number): void; // 오버로드 시그니처
  //   sayHello: () => void;
}

const person: Person = {
  name: "홍무무",
  sayHello: function () {
    console.log("hello!");
  },
};

person.sayHello();
person.sayHello(1, 2);

// ------------------------------------------------------------------- //
/**
 * 인터페이스 확장
 */

// interface Animal {
//   name: string;
//   age: number;
// }

// interface Dog {
//   name: string;
//   age: number;
//   isBark: boolean;
// }

// interface Cat {
//   name: string;
//   age: number;
//   isScratch: boolean;
// }

// interface Chicken {
//   name: string;
//   age: number;
//   isFly: boolean;
// }
// --> 중복 코드 발생

// 중복되는 name, age를 공통 인터페이스로 분리
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  name: string;
  isBark: boolean;
}

interface Cat extends Animal {
  name: string;
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dog: Dog = {
  name: "강아지", // name: "돌돌이"; 를 인터페이스에 재정의하는 순간, 오류가 발생한다.
  // 프로퍼티를 재정의할 때는 해당 타입의 sub 타입이어야 한다.
  age: 3,
  isBark: true,
};

// 다중확장
const dogCat: DogCat = {
  name: "강아지",
  age: 3,
  isBark: true,
  isScratch: true,
};

// ------------------------------------------------------------------- //
/**
 * 인터페이스 선언 합치기
 */
interface Saram {
  name: string;
}

interface Saram {
  age: number;
}

// 인터페이스는 동일한 이름으로 정의할 수 있고, 동일한 이름의 인터페이스의 프로퍼티가 합쳐지게 된다.
const saram: Saram = {
  name: "사람이",
  age: 25,
};

// interface Saram {
//   age: string; // ❌ 오류 : 이름이 같은 프로퍼티가 number로 존재하는데, string으로 또 정의해서 충돌이 일어남
//   // 확장에 sub타입도 불가하단.
// }

/**
 * [ 모듈 보강 ]
 * 인터페이스 합치기는 "타입스크립트 모듈, 라이브러리 보강"의 경우 사용된다.
 */
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: number;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: 4,
};

/**
 * 인터페이스 확장 요약
 *
 * 1. extends 키워드로 다른 인터페이스를 상속받을 수 있음
 *    - 중복 필드를 줄이고, 공통 구조를 재사용 가능
 *
 * 2. 다중 확장도 가능
 *    - interface A extends B, C {...}
 *    - 모든 상위 인터페이스의 속성을 포함하게 됨
 *
 * 3. 주의점
 *    - 속성을 재정의할 경우, 반드시 원래 속성의 서브타입이어야 함
 *    - 같은 이름의 속성(type이 다름)을 상속하면 충돌 발생
 *
 */
