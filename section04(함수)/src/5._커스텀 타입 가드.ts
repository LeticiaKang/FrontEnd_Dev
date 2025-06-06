/**
 * Custom type Guard
 * - 타입스크립트가 특정 유니언 타입 중 어떤 타입인지 추론할 수 있도록 도와주는 함수
 */

// 강아지, 고양이 타입을 만들기
type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

/**
 * isDog: animal이 Dog 타입인지 검사하는 사용자 정의 타입 가드
 * isCat: animal이 Cat 타입인지 검사하는 사용자 정의 타입 가드
 */
function isDog(animal: Animal): animal is Dog {
  // retun이 true이면 Dog타입임을 말함
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  // animal 유형에 따라 프로퍼티를 구분해서 출력해야 함.
  if (isDog(animal)) {
    animal; // : animal is Dog 에 의해 Dog로 추론
  } else if (isCat(animal)) {
    animal;
  }
}

/**
 * Custom Type Guard 요약
 *
 * 1. 목적
 *    - 유니언 타입(예: Dog | Cat)에서 실제 타입을 판별하기 위해 사용
 *
 * 2. 시그니처
 *    - function 함수명(x: 타입): x is 특정타입
 *    - 반환 타입이 "x is Y" 형태이면, TypeScript는 함수 내 조건이 참인 경우 x를 Y로 추론함
 *
 * 3. 사용 예
 *    - isDog(animal): animal is Dog → 타입을 Dog로 좁힐 수 있음
 *    - isCat(animal): animal is Cat → 타입을 Cat으로 좁힐 수 있음
 *
 * 4. 일반적인 구현 방식
 *    - 특정 속성이 존재하는지 검사하거나,
 *    - 'type' 같은 명확한 구분자(discriminant)를 활용
 *
 * 5. 장점
 *    - 타입 안전성 향상
 *    - 타입 좁히기를 통해 코드 가독성 및 자동완성 향상
 */
