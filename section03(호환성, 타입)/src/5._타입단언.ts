/**
 * 타입 단언
 */
type Person = {
    name: string;
    age: number;
};

// ❌ 오류: 빈 객체는 Person의 모든 필드를 만족하지 않음
let person1: Person = {};
person1.name = "홍길동";
person1.age = 23;

// ❌ 오류: 타입 추론 시 person2는 {}로 간주되어 name, age 속성이 없다고 판단됨
let person2 = {};
person2.name = "홍길동";
person2.age = 23;

// 타입 단언을 통해 강제로 Person으로 간주
let person3 = {} as Person;
person3.name = "홍길동";
person3.age = 23;



type Dog = {
    name: string;
    color: string;
};

//타입 단언으로 초과 속성 체크를 회피
let dog = {
    name: "돌돌이",
    color: "갈색",
    breed: "진도", // Dog에는 없지만 타입 단언을 통해 프로퍼티를 추가할 수 있다.
                    // dog: Dog으로 선언하면 초과 프로퍼티 검사에 걸리게 된다.
} as Dog;

/**
 * 타압단언은 아래 규칙을 지켜야 사용 가능하다.
 * A as B
 *  1) A가 B의 슈퍼 타입이거나
 *  2) A가 B의 서브타입이어야 한다.
 */
let num1 = 10 as number;           // ✅ 같은 타입
let num2 = 10 as unknown;          // ✅ any, unknown은 모든 타입과 호환
let num3 = 10 as string;    // ❌ number는 string형식으로 변환할 수 없음. number는 string과 교집합이 없음 (타입 오류)
let num4 = 10 as unknown as string;    // ⛔ 이중 단언: 실제로는 위험하며 사용 지양

/**
 * const 단언 (객체 타입과 함께 사용할 때 효과적이다)
 * 객체를 리터럴 타입 + readonly로 고정함
 */
let num5 = 10 as const;
let cat = {
    name: "야옹이",
    color: "노란색",
} as const;
cat.name = "강아지"; //❌ 해당 개체를 readonly로 사용할 수 있다.

/**
 * Non-Null 단언 (!)
 * 옵셔널 속성에 대해 null/undefined가 아니라고 강제 선언
 */
// 게시판을 만들어야 한다고 하자.
type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "게시글1",
    author: "홍길동",
};

// post.author? : 옵셔널 체이닝
// --> author가 없으면 undefined으로 나오게 하는 거임
const len1: number = post.author?.length;   // ❌ 오류: author가 undefined일 수 있어서 number 타입에 할당 불가
const len2: number = post.author!.length; // Non-Null 단언으로 컴파일러에게 undefined 아님을 확신시킴


/**
 * ✅ 타입 단언 정리
 *
 * 1. 타입 단언은 컴파일러에게 "내가 타입을 확실히 안다"고 알려주는 방법이다.
 * 2. as 문법 사용 시, A가 B의 서브타입 또는 슈퍼타입일 때만 타입 단언이 가능하다.
 * 3. 객체 초기화 시 필드를 모두 포함하지 않아도 단언으로 우회 가능하지만, 신중하게 사용해야 한다.
 * 4. const 단언 (`as const`)은 객체 전체를 리터럴 값과 readonly로 고정하여 불변성 보장에 유리하다.
 * 5. Non-null 단언 (`!`)은 값이 null 또는 undefined가 아니라고 강제할 때 사용하지만, 실제 값이 없을 경우 런타임 오류가 날 수 있으므로 주의가 필요하다.
 *
 * ⚠️ 타입 단언은 타입 검사 우회를 허용하므로, 오용 시 타입 안정성을 해칠 수 있다.
 *    되도록 정확한 타입 설계와 조건 검사로 대체하고, 정말 필요한 경우에만 신중하게 사용할 것.
 */
