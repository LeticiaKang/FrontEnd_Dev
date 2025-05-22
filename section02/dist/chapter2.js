// --------------- 배열과 튜플 -----------------
// 1. 배열 : 수열
const numArr1 = [1, 2, 3, 4, 5]; // 이런식으로 정의하는 게 코드가 더 간단하다. 주로 이렇게 사용함.
const strArr1 = ["a", "b", "c", "d", "e"];
const boolArr = [true, false, true];
//만약, 배열에 들어가는 요소가 다양할 경우에는??? union type를 사용해야 한다
let multiArr = [1, "a", 2, "b"];
// 다차원 배열(배열 안에 배열)
let doubleArr = [[1, 2, 3], [4, 5, 6]];
// 2. 튜플 : 객체 (tS에만 존재, JS에서는 없다) 
// 길이와 타입이 고정된 배열
let numTuple = [1, 2];
//numTuple = [1, 2, 3]; // 오류 >> 길이를 초과할 수 없다
let tuple1 = ["a", true, 1];
// tuple1 = [true, "a", 1];         //오류 >> 지정한 타입 순서가 바뀌면 안된다.
tuple1 = ["hello", false, 1000]; //가능
/**
 * JS에서는 그냥 배열로 나타난다.
 * 그래서 pop.push가 가능하다.
 */
tuple1.push(1);
tuple1.pop();
tuple1.pop();
tuple1.pop();
tuple1.pop();
tuple1.pop();
const obj1 = { key1: "value1", key2: "value2" };
const obj2 = { key1: "value1", key2: "value2" };
export {};
