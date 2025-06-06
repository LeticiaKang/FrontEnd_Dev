/**
 * 제네릭 인터페이스
 */
interface KeyPair<K, V> {
  key: K;
  value: V;
}

// keypair 인터페이스를 갖는 변수 선언
let keyPair: KeyPair<string, number> = {
  // **** 제네릭 인터페이스를 사용할 때, 인터페이스의 제네익 타입 변수를 직접 정의해줘야 한다. ****
  key: "key",
  value: 1,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * 인덱스 시그니처
 * key, value가 고유한 타입을 갖게하고 싶을 때 사용함.
 */
interface NumberMap {
  [key: string]: number;
}
let numberMap: NumberMap = {
  key: -1234,
  key2: 1233,
};

// value값을 특정 타입으로 정하지 않고, 제네릭으로 설정하면서 좀 더 유연하게 사용한다.
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "sdfsdf",
  //   key2: 23123,
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "sdfsdfs",
  //   key2: 12312,
};

/**
 * 제네릭 인터페이스의 활용 사례
 */
/**
 * User 관리 프로그램을 만들 거고,
 * 학생/개발자/교직원원 유저로 나뉜다.
 */
interface CmmnProfile {
  name: string;
  affiliation: string;
}

interface StudentDetailInfo extends CmmnProfile {
  userType: "student";
  grade: number;
  gpa: number;
}

interface StaffDetailInfo extends CmmnProfile {
  userType: "staff";
  isAdmin: boolean;
  officeLocation: string;
}

interface DeveloperDetailInfo extends CmmnProfile {
  userType: "developer";
  isDev: boolean;
}

interface UserDefault<T> {
  id: string;
  isActive: boolean;
  detailInfo: T;
}

let std: UserDefault<StudentDetailInfo> = {
  isActive: true,
  id: "std1",
  detailInfo: {
    name: "김학생생",
    affiliation: "전자공학과",
    gpa: 3.0,
    grade: 2,
    userType: "student",
  },
};

let stf: UserDefault<StaffDetailInfo> = {
  isActive: true,
  id: "std1",
  detailInfo: {
    name: "박직원",
    affiliation: "교무과",
    userType: "staff",
    isAdmin: false,
    officeLocation: "학습동 3층",
  },
};

let dev: UserDefault<DeveloperDetailInfo> = {
  isActive: true,
  id: "std1",
  detailInfo: {
    name: "주코딩",
    affiliation: "(주)코딩나라",
    userType: "developer",
    isDev: true,
  },
};

function myMajorIs(user: UserDefault<StudentDetailInfo>) {
  console.log(`My major is ${user.detailInfo.affiliation}입니다.`);
}

myMajorIs(std);
// myMajorIs(stf);
// ❌ 에러 : 메서드의 매개변수 타입을 IF문을 사용하지 않고 제한했음.
// 'UserDefault<StaffDetailInfo>' 형식의 인수는 'UserDefault<StudentDetailInfo>' 형식의 매개 변수에 할당될 수 없습니다.
