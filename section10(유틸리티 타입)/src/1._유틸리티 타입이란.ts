/**
 * 유틸리티 타입
 *
 * 제네릭, 맵드 타입, 조건부 타입 등의 타입 조작 기능을 이용해
 * 실무에서 자주 사용되는 타입을 미리 만들어 놓는 것.
 *
 */

// ---------------------- Readonly ---------------------- //
interface Person {
  name: string;
  age: number;
}

const person: Readonly<Person> = {
  name: "이정화",
  age: 33,
};

person.name = "";

/**
 * 이렇게 Readonly라는 유틸리티 타입을 사용하면,
 * 객체 변경을 하지 못하도록 할 수 있다.
 */

// ---------------------- Partial ---------------------- //
const person2: Partial<Person> = {
  name: "이정환",
};
// Person에 있는 모든 프로퍼티를 선택적 프로퍼티로 만들어준다.
