/**
 * 서로소 유니온 타입 = taged Union 타입이라고도 불린다.
 * - 교집합이 없는 유니온 타입
 * - 공통의 구분자(discriminant)를 사용하여 타입을 명확히 구분 가능
 *  ex) string  -  number
 */

// 웹 서비스에 회원의 유형이 총 3가지라고 가정하다.
// 관리자, 회원, 게스트
type Admin = {
    tag: "ADMIN";   //추가 --> tag프로퍼티에 의해 각 개체의 교집합이 없어진다.
    name: string;
    kickCount: number;
};

type Member = {
    tag: "MEMBER";   //추가
    name: string;
    point: number;
};

type Guest = {
    tag: "GUEST";   //추가
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest; // 서로소 유니온 타입이 된다.

// 로그인했을 때, 메세지 출력 함수를 만들어보기
// ✅ in 연산자를 이용한 타입 분기 (but 유지보수에 약함)
function login(user:User){
    if('kickCount' in user){
        console.log(`${user.name}님 ${user.kickCount}명 강퇴했습니다.`);
    } else if ('point' in user){
        console.log(`${user.name}님 ${user.point}포인트 모았습니다.`);
    } else if ('visitCount' in user){
        console.log(`${user.name}님 ${user.visitCount}번 방문했습니다.`);
    }
}
// 이렇게 사용하면, 다른 개발자가 user마다 어떤 속성이 있는지 직관적으로 판단하기 어렵다.


// ✅ tag(구분자)를 활용한 조건 분기 - 가독성/유지보수 높음
function login2(user:User){
    if(user.tag === "ADMIN"){
        console.log(`${user.name}님 ${user.kickCount}명 강퇴했습니다.`);
    } else if (user.tag === "MEMBER"){
        console.log(`${user.name}님 ${user.point}포인트 모았습니다.`);
    } else if (user.tag === "GUEST"){
        console.log(`${user.name}님 ${user.visitCount}번 방문했습니다.`);
    }
}

// ✅ switch문 활용 - 타입 가드 효과 + 확장성 좋음
function login3(user:User){
    switch(user.tag) {
        case "ADMIN":{
            console.log(`${user.name}님 ${user.kickCount}명 강퇴했습니다.`);
            break;
        }
        case "MEMBER": {
            console.log(`${user.name}님 ${user.point}포인트 모았습니다.`);
            break;
        }
        case "GUEST": {
            console.log(`${user.name}님 ${user.visitCount}번 방문했습니다.`);
            break;
        }
    }
};



/**
 * 서로소 유니온 타입을 사용하면 좋은 사례
 */
// 비동기 작업의 결과를 처리하는 객체를 만들어야 한다
// 비동기 작업 결과를 객치로 표현하면 --> loading, failed, success이렇게 분류할 수 있음.

type LoadingTask = {
    state: 'LOADING';
};

type FailedTask = {
    state: 'FAILDED';
    error: {
        message: string;
    };
};

type SuccessTask = {
    state: 'SUCCESS';
    response: {
        data: string;
    };
};

// type AsyncTask = {
//     state: 'LOADING' | 'FAILDED' | 'SUCCESS';
//     error?: {
//         message: string;
//     };
//     response?: {
//         data: string;
//     };
// };

// 유니온 타입
type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask){
    switch(task.state) {
        case 'LOADING': {
            console.log('로딩중');
            break;
        }
        case 'FAILDED': {
            // console.log(`성공 : ${task.error.message}`);    // ❌ tash가 error는 어차피 선택적 프로퍼티라서 오류가 남
            console.log(`성공 : ${task.error.message}`);    // ❌ tash가 error는 어차피 선택적 프로퍼티라서 오류가 남
            break;
        }
        case 'SUCCESS': {
            console.log(`성공 : ${task.response.data}`);
            break;
        }
    }
}

const loading = {
    state: 'LOADING',
};

const failed = {
    state: 'FAILDED',
    error: {
        message: "오류 발생 원인은 ~",
    },
};

const success = {
    state: 'SUCCESS',
    response: {
        data: "데이터 ~~",
    },
};


/**
 * ✅ 서로소 유니온 타입 정리
 *
 * 1. 서로소 유니온 타입이란:
 *    - 각 타입 간에 공통된 속성이 없고,
 *    - 명확한 discriminant(구분자, 예: tag, state)를 가진 유니온 타입을 의미함.
 *
 * 2. 장점:
 *    - 조건문이나 switch 문을 통해 타입을 안전하게 좁힐 수 있음 (타입 가드)
 *    - 객체 설계가 명확해지고, IDE의 자동완성 기능이 잘 작동함
 *    - 예외 없는 exhaustive handling 가능 (모든 case 처리 보장)
 *
 * 3. 실무 활용 사례:
 *    - 사용자 역할 분기
 *    - 비동기 작업 처리 결과 분기
 *    - 상태 패턴(State pattern) 구현 등
 *
 * 4. 주의사항:
 *    - 객체 리터럴에서 프로퍼티 이름을 정확히 작성할 것 ("message" vs "messae")
 *    - 선택적 프로퍼티 대신 구분자(discriminant)를 활용하여 타입을 확실히 나누는 것이 좋음
 */
