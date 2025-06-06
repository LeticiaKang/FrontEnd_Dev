// enum타입
// 여러가지 값들에 각각 이름을 부여해서 열거해두고 사용하는 타입

enum Role {
    // ADMIN = 0,  
    // USER = 1,
    // GUEST = 2

    // 따로 지정하지 않아도 0 1 2  부여된다.
    // ADMIN,
    // USER,
    // GUEST

    // 10부터 하고 싶을 때 
    ADMIN = 10,
    USER,
    GUEST
};
// 이와 같이 숫자가 할당되는 enum을 숫자형 enum 이라고 한다.

const user1 = {
    name: "kim",
    // role: 0,        //관리자
    role: Role.ADMIN
};

const user2 = {
    name: "kim",
    // role: 1,        //일반유저
    role: Role.USER
};

const user3 = {
    name: "kim",
    // role: 2,        //게스트
    role: Role.GUEST
};


//tsx src/5._Enum.ts 명령어로 값이 잘 들어갔는지 확인하기.
console.log(user1.role);
console.log(user2.role);
console.log(user3.role);


// ----------------------- 문자형 enum ----------------------- //
enum Language {
    KOREAN = "ko",
    ENGLISH = "en",
    JAPANESE = "ja"
};

const user4 = {
    name: "kim",
    language: Language.KOREAN
};
