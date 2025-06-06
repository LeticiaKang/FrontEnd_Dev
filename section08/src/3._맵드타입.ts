/**
 * Mapped Type
 */
/**
 * 유저 정보를 관리하는 객체 생성
 */
interface User {
  id: number;
  name: string;
  age: number;
}

// 한명의 유저 정보를 불러오는 기능(데이터는 서버에)
function fetchUser(): User {
  //...기능
  return {
    id: 1,
    name: "김무무",
    age: 34,
  };
}

//한명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
  //..수정 기능
}

updateUser({
  id: 1,
  name: "김무무",
  age: 34,
});
// age만 바꾸고 싶은데, 모든 프로퍼티를 같이 보내는 것은 비효율적임

type ParticialUser = {
  // 모든 프로퍼티가 "선택적 프로퍼티"가 된다
  [key in keyof User]?: User[key]; // indexed Access Type에 의해 number, string, number가 된다.
};

function updateUser2(user: ParticialUser) {
  //..수정 기능
}
updateUser2({ age: 25 });

//모든 프로퍼티를 boolean으로 변환
type BooleanUser = {
  [key in keyof User]: boolean;
};

// 모든 프로퍼티가 readonly로 바껴서 반환하는 경우
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

function fetchUserReadonly(): ReadonlyUser {
  return {
    id: 1,
    name: "김무무",
    age: 34,
  };
}

const userReadonly = fetchUserReadonly();
// userReadonly.id = 1; //읽기 전용 속성이 되서, 변경이 불가능함.

/** 연습 */

// 특정 키만 골라내기	type MyPick<T, K>
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// 테스트
type Picked = MyPick<User, "id" | "name">;
// 결과: { id: number; name: string }
