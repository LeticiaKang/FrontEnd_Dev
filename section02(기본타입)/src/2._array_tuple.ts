// --------------- 배열과 튜플 -----------------

//  ------- 1.배열 : 수열 -------
const numArr1: number[] = [1, 2, 3, 4, 5];  // 이런식으로 정의하는 게 코드가 더 간단하다. 주로 이렇게 사용함.
const strArr1: string[] = ["a", "b", "c", "d", "e"];
const boolArr: Array<boolean> = [true, false, true];

// --- 만약, 배열에 들어가는 요소가 다양할 경우에는??? union type를 사용해야 한다 --- 
let multiArr: (number | string)[] = [1, "a", 2, "b"];  

// --- 다차원 배열(배열 안에 배열)
let doubleArr: number[][] = [[1, 2, 3], [4, ---  5, 6]];



// ------- 2. 튜플 : 객체 (tS에만 존재, JS에서는 없다) -------
// ------- 길이와 타입이 고정된 배열 ------- 
let numTuple: [number, number] = [1, 2];
//numTuple = [1, 2, 3]; // 오류 >> 길이를 초과할 수 없다

let tuple1: [string, boolean, number] = ["a", true, 1];
// tuple1 = [true, "a", 1];         //오류 >> 지정한 타입 순서가 바뀌면 안된다.
tuple1 = ["hello", false, 1000];    //가능
/**
 * JS에서는 그냥 배열로 나타난다. 
 * 그래서 pop.push가 가능하다.
    tuple1.push(1);
    tuple1.pop();
    tuple1.pop();
    tuple1.pop();
    tuple1.pop();
    tuple1.pop();
 */

/** 그럼 언제 쓰일까? user 정보를 아래와 같이 가져와서 저장한다고 하자.
 *  이때, 누군가 배열을 잘못 넣을 상황을 방지한다.
 */
const users = [
    ["kim", 1],
    ["park", 2],
    ["choi", 3],
    ["lee", 4],
    [5, "Lim"]
];


const users2: [string, number][] = [
    ["kim", 1],
    ["park", 2],
    ["choi", 3],
    ["lee", 4],
    // [5, "Lim"]  // 이렇게 하면 오류가 나고. 잘못 넣을 상황을 방지할 수 있다.
];


