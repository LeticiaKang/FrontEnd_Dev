/**
 * keyOf 연산자
 * - 형태 : keyof [타입]
 *
 * keyof Person
 * -- Person 타입의 모든 key ("name", "age")를 문자열 리터럴 유니언 타입으로 반환
 */
interface Person {
  name: string;
  age: number;
}

function getProperty(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "김무무",
  age: 33,
};
getProperty(person, "name"); // 김무무
getProperty(person, "age"); // 33
// getProperty(person, "isRobot"); // ❌: 에러 -- isRobot 라는 프로퍼티가 없기 때문에에

///// 정리 /////
type Car = {
  brand: string;
  year: number;
};

type CarKeys = keyof Car; // "brand" | "year"
type CarBrandType = Car["brand"]; // string
type CarValues = Car[keyof Car]; // string | number

/**
 * typeof 연산자
 *  : 값의 타입을 추론해서 타입으로 사용할 수 있게 해주는 연산자
 */
type Person2 = typeof person; //person이라는 변수의 타입을 추론해서 Person2 타입에 할당
// 결과적으로 아래와 같은 타입이 된다.
// type Person2 = {
//   name: string;
//   age: number;
// };

// keyof + typeof 조합
function getProperty2(person: Person, key: keyof typeof person) {
  // 변수의 타입을 추출해서 거기서 키 추출
  return person[key];
  //  런타임 변수인 person의 타입을 컴파일 타임에 타입으로 변환하여 키 타입 추론
}

const minsu: Person2 = {
  name: "groot",
  age: 23,
};
getProperty2(minsu, "age");

/**
 * typeof 는 코드에 존재하는 값을 기준으로 타입을 추출할 때 사용.
 * keyof typeof obj 는 런타임 객체의 키를 타입 시스템에서 안전하게 사용하고 싶을 때.
 */
