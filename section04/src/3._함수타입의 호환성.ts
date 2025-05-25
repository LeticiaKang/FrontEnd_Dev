/**
 * 함수 타입의 호환성
 * : 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮으지는 판단하는 것
 * 호환 체크를 위해 아래 2가지를 모두 확인해야 한다.
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 업캐스팅: B의 반환값(10 리터럴)은 A의 반환값(number)에 들어갈 수 있음
// b = a;  // ❌ 다운캐스팅: number는 10만 반환한다고 보장할 수 없음

/**
 * 기준2. 매개변수가 호환되는가?
 *  1) 매개변수 개수가 동일한 경우
 *  2) 매개변수 개수가 다른 경우
 */
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // ❌ 10은 number의 서브타입 → 업캐스팅 불가
d = c; // ✅ number는 10에 들어갈 수 있음

type Animal = {
  name: string;
};
type Dog = {
  name: string;
  color: string;
};

let dogFunc = (dog: Dog) => {
  console.log(`${dog.name}는 ${dog.color}색이다.`);
};
let animalFunc = (animal: Animal) => {
  console.log(`이 동물은 ${animal.name}`);
};

dogFunc = animalFunc;
// animalFunc = dogFunc; // ❌ 오류: animal의 sub인 dog에는 추가 프로퍼티가 있어서 업캐스팅이 불가함.

// 2) 매개변수 개수가 다를 경우
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // ✅ 두 번째 인자는 무시됨
// func2 = func1;  // ❌ func2는 두 번째 인자를 모르기 때문에 불안정

/**
 * 함수 타입 호환성 요약
 *
 * 1. 반환값의 타입 (공변성)
 *    - 더 구체적인 반환값은 더 넓은 타입으로 대입 가능
 *    - 예: () => 10 을 () => number 에 대입하는 것은 가능
 *    - 반대로는 불가능 (number는 항상 10일 거라고 보장할 수 없기 때문)

 * 2. 매개변수의 타입 (반공변성)
 *    - 더 넓은 타입을 받는 함수는 더 좁은 타입을 받는 함수에 대입 가능
 *    - 예: (value: number) => void 를 (value: 10) => void 에 대입하는 것은 가능
 *    - 반대로는 불가능 (10은 number 전체를 포괄하지 못하기 때문)

 * 3. 매개변수의 개수
 *    - 매개변수가 많은 함수는 적은 함수에 대입 가능
 *    - 추가 인자는 무시되기 때문에 괜찮음
 *    - 반대로는 불가능 (필요한 인자가 부족할 수 있기 때문)

 * 4. 객체 타입 매개변수의 호환
 *    - 슈퍼타입을 매개변수로 받는 함수는 서브타입을 받는 함수에 대입 가능
 *    - 예: Animal을 받는 함수는 Dog를 받는 함수에 대입 가능
 *    - 반대로는 불가능 (Dog에는 Animal보다 더 많은 정보가 필요하므로)
 */
