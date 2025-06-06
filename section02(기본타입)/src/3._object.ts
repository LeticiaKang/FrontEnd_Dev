// ------------------- 객체 --------------------- //
/**
let user: object = {
    id: 1,
    name : "kim",
    age : 30
}
    
user.id; // {}형식에 'id' 속성이 없습니다. 라는 에러 발생

*/

/**         마치 객체의 리터럴 타입을 사용하는 것처럼 아래와 같이 정의한다.
 *          이런 것을 "객체 리터럴 타입" 이라고 한다.
 *          object로 정의하면, property나 method에 접근하면 오류가 나기 때문에 잘 사용하지 않고,
 *          아래 와같이 모든 property까지 정의할 수 있는 객체 리터럴 타입을 사용한다.
 *
 *          구조를 기준으로 타입을 결정한다.(여기서 구조는 property)
 *          이런 것을 구조적 타입 시스템, Property Based Type System 이라고 한다.
 *
 *          C언어는 다른 언어는 "이름을 기준으로 타입을 정의"한다.
 *          이런 것을 "명목적 타입 시스템" 이라고 한단.
 */
let user: { id: number; name: string; age: number } = {
  id: 1,
  name: "kim",
  age: 30,
};

user.id;
user.name;
user.age;

let dog: { name: string; color: string } = {
  name: "돌돌이",
  color: "갈색",
};
console.log(`${dog.name}는 ${dog.color}이다.`);

/**
 * ------- 객체를 사용하다 보면, 사용하지 않은(혹은 아직 정해지지 않은) 속성이 있을 경우 -------
 *      타입을 정의할 때, 물음표(?)를 사용한다.
 *      이런 것을 "선택적(optional) 타입" 이라고 한다.
 */
let user2: { id?: number; name: string; age?: number } = {
  name: "kim",
  age: 30,
};

let config: { readonly apiKey: string } = {
  apiKey: "1234",
};
// config.apiKey = "12345"; // readOnly이기 때문에 중요한 api키는 변경할 수 없다.
