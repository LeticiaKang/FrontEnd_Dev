/**
 * 타입스크립트 클래스
 */

const employee = {
  name: "김무무",
  age: 23,
  position: "developer",
  work() {
    console.log("일하는 중");
  },
};

class Employee {
  //필드
  //   name; // ❌ 'age' 멤버에는 암시적으로 'any' 형식이 포함됩니다.
  //   age;
  //   position;
  name: string;
  age: number;
  position: string;

  //생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work() {
    console.log("일하는 중");
  }
}

const employeeB = new Employee("이무무", 34, "designer");
employeeB.work();

// 구조적 타입을 따르는 타입스트립트 특징을 이용한 객체 생성
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};

//클래스 상속을 위한 클래스 만들어보기
class ExecutiveOfficer extends Employee {
  //필드
  officeNumber: number;

  //생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
