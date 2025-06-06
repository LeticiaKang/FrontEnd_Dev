/**
 * 클래스
 */

// 학생을 N명 만들고 싶다. 아래와 같이 여러번 사용 하지 말고, class를 만들어서 객체를 찍어낸다.
let studentA = {
  name: "홍길동",
  age: 23,
  grade: "A+",
  study() {
    console.log("열심히 공부 중");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

// 클래스 명칭은 "파스탈 표기법"으로 작성한다.(앞글자 대문자)
// 클래스 안에서는 콤마를 찍지 않음.
class Student {
  //필드
  name;
  age;
  grade;

  //생성자
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  //메서드
  study() {
    console.log("열심히 공부 중");
  }
  introduce() {
    console.log(`안녕하세요. ${this.name}입니다!`);
  }
}

// 클래스를 이용하여 생성한 "인스턴스"
let studentB = new Student("홍머머", 27, "B");
console.log(studentB);
studentB.introduce();
studentB.study();

// node src/1._chapter0.js 터미널에 실행해보기

// 실습 : studentDeveloper 클래스를 만들기
class StudentDeveloper extends Student {
  //필드
  language;

  //생성자
  constructor(name, age, grade, language) {
    super(name, age, grade);
    this.language = language;
  }

  //메서드
  study() {
    console.log("열심히 공부 중");
  }
  introduce() {
    console.log(`안녕하세요. ${this.name}입니다!`);
  }
  programming() {
    console.log(`${this.language}로 개발 중!`);
  }
}

let studentDeveloperA = new StudentDeveloper("김무무", 23, "A+", "JS");
console.log(" ==== studentDeveloperA ==== ");
studentDeveloperA.programming();
