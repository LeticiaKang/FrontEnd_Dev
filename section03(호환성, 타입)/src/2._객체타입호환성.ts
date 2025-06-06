/**
 * 객체 타입 간의 호환성
 */

import { promises } from "dns";

/**
 * 복습 : number 타입은 number 리터럴 타입의 슈퍼타입이라 업캐스팅이 가능하다.
 */
let num1: number = 10;
let num2: 10 = 10;
num1 = num2;
// num2 = num1;

/**
 * 이번 시간 : 객체 타입간의 호환성이란
 * --> 어떤 객체타입을 다른 객체 타입으로 취급해도 괜찮은가?
 */
type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
}

let animal: Animal = {
    name: "기린",
    color: "노란색",
};

let dog: Dog = {
    name: "돌돌이",
    color: "갈색",
    breed: "진도",
};

animal = dog;
// dog = animal;   // ---> Animal(super) -- Dog(sub type)
/**
 *  객체 타입의 super / sub type 관계는 "property"를 기준으로 사용된다.
 * Animal은 name, color 를 가지고 있으면 Animal로 본다.
 * Dog타입은 breed라는 property도 가지고 있어야 한다.
 *
 * 그래서 Animal이 super 타입이 되는 것임.(추가 property 더 있다고 super가 아님)
 */

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book:Book;
let programmingBook: ProgrammingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs",
};

book = programmingBook;
//불가
// programmingBook = book;


/**
 * skill 을 정의할 수 없다는 오류가 발생한다.
 * 왜 upcasting은 가능한데, 안에서 초기화 할 수 없는건가?
 * --> 타입 스크립트에서 "초과 프로퍼티 검사" 기능 때문이다.
 *     : 객체 타입 변수를 초기화할 때, skill 같은 실제 타입에서는 정의하지 않은  프로퍼티를 검사하는 것임.
 */
let book2: Book = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs",
}
let book3: Book = programmingBook; //이런식으로 사용해야 함

function func(book: Book) {}
func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs",
});

func(programmingBook);

/**
 * < 결론 >
 * 1.객체 타입의 호환성은 '속성(Property)' 기준으로 결정된다
 *   - 객체타입 간의 포함관계는 "프로퍼티"를 기준으로 결정된다. 프로퍼티가 적는 쪽이 super타입이 된다.(구성이 같는 기준하에)
 *   - 어떤 타입 A가 타입 B보다 상위 타입(Super Type)이 되려면, A의 모든 속성이 B에도 있어야 함.
 *
 * 2. 객체 리터럴을 바로 할당할 경우, 정의되지 않은 속성이 있으면 오류 발생
 *   - 업캐스팅은 가능하지만, 초기화 하는 경우에 프로퍼티를 추가하면 '초과 프로퍼티 검사'에 위배된다.
 *   - 그래서 만약 추가 프로퍼티를 넣고 싶으면 --> 먼저 변수에 할당한 후 업캐스팅하면 오류 없다.
 */