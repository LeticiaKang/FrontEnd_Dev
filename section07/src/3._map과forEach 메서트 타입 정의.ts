/**
 * map메서드 타입 정의하기
 */
const arr = [1, 2, 3];
const newArr = arr.map((item) => item * 2);
// [2,4,6]

function map2(arr: unknown, callback: (item: unknown) => unknown) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

function map3<T>(arr: T[], callback: (item: T) => T) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map3(arr, (it) => it * 2);
map3(["a", "b", "c"], (it) => it.toUpperCase());
// map 메서드는 모든 타입의 결과값이 나올 수 있어야 한다.
map3(["a", "b", "c"], (it) => parseInt(it));

//수정된 map함수
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
map(["a", "b", "c"], (it) => parseInt(it));
// T : string ---> callback 함수의 return값은 U로 추론되면서 number가 됨.

/**
 * forEach 메서드의 타입 정의하기
 */
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach1(arr: unknown, callback: (item: unknown) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach1(arr2, (it) => {
  console.log(it.toFixed());
});
// ---> unknown 타입이라 에러가 발생함

function forEach2<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach2(arr2, (it) => {
  console.log(it.toFixed());
});

forEach2(["a", "b", "c"], (it) => {
  it;
});

// ===> 제네릭을 사용하면 타입을 유연하게 정의할 수 있다.
