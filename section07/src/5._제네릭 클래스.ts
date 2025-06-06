/**
 * 제네릭 클래스
 * ===> 제네릭 인터페이스나 타입변수와는 다르게, 타입을 추론하기 때문에 별도로 명시하지 않아도 된다.
 */
class List<T> {
  //필드, 생성자, 메서드
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(44);
numberList.print(); //[ 1, 2, 44 ]

const strList = new List(["a", "b", "c"]);
strList.pop();
strList.push("d");
strList.print(); //[ 1, 2, 44 ]
