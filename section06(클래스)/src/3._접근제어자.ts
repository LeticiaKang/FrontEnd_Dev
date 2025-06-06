/**
 * 접근제어자 :
 * access modifier
 * - public, private, protected
 */

class Employee {
  //필드
  public name: string;
  private age: number; //** private : 외부도 막고 / 파생클래스도 막고 */
  protected position: string; //** protected : 외부는 막고 / 파생클래스는 가능 */

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
// 이렇게 객체의 내부 프로퍼티에 접근할 수 있는 이유는,
// 기본적으로 pulic으로 설정되어 있기 때문이다.
employeeB.name;
// employeeB.age; // ❌ 에러 : private 접근제어자로 에러가 발생한다.
// employeeB.position;

// ** private로 된 프로퍼티는 파생 클래스에서도 접근할 수 없다.
class ExecutiveOfficer extends Employee {
  //필드
  officeNumber: number;

  //생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  //메서드
  func() {
    this.age; // ❌ 에러 : private 접근제어자로 에러가 발생한다.
    this.position; //✅ protected 접근제어자로 접근이 가능함.
  }
}

// 생성자에 접근자를 붙이면 필드를 자동으로 만든다.
class student {
  constructor(
    public name: string,
    private age: number,
    protected highschoolNm: string,
  ) {}
}
