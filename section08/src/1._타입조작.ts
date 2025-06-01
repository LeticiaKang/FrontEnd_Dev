/**
 * 타입조작
 * - 제네릭 / 인덱스드 엑세스 타입 / keyof연산자 / mapped(맵드) 타입 / 템플릿 리터럴 타입 / 조건부 타입
 */

/**
 * 인덱스드 엑세스 타입(Indexed Access Type)
 *  : 객체, 배역, 튜플 타입에서 특정 프로퍼티 혹은 요소의 타입을 추출하는 타입
 */
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "김작가",
  },
};

// 인터페이스의 특정 프로퍼티만 가져올 수 있다.
// ----> 프로퍼티가 추가/제거 되어도, 수정할 필요 없음
function printAuthorInfo(author: Post["author"]) {
  //  ***** Post 인터페이스의 "author" 프로퍼티의 타입만 추출 *****
  console.log(`작가: ${author.name} - 아이디: ${author.id}`);
}

printAuthorInfo(post.author);

// 잘못된 예: 변수는 타입으로 쓸 수 없음
const key = "author"; // 변수(값)
// function test(author: Post[key]) {
//   console.log(`작가: ${author.name} - 아이디: ${author.id}`);
// }

// ***** 중첩된 프로퍼티 타입까지 추출 *****
function apply(id: Post["author"]["id"]) {
  console.log(`아이디: ${id}`);
}

/**
 * Post 타입을 배열로 바꾸기
 */
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

// 배열 타입에서 요소의 타입을 추출
const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "김작가",
  },
};

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`작가: ${author.name} - 아이디: ${author.id}`);
}
printAuthorInfo2(post2.author);

type Tup = [number, string, boolean];
type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean
// type Tup3 = Tup[3]; //❌ 에러 : 튜플의 길이를 넣어갔기 때문에
type TupNum = Tup[number]; // number | string | boolean

/**
 * ┌────────────────────┬───────────────────────────────┬────────────────────────────────────────┐
 * │      표현식        │            의미                │              결과 타입                 │
 * ├────────────────────┼───────────────────────────────┼────────────────────────────────────────┤
 * │ T["prop"]          │ 객체의 특정 프로퍼티 타입 추출 │ 해당 프로퍼티 타입                      │
 * │ T[K]               │ K가 "ㄴㄴ"일 경우            │ Post["title"] → string                 │
 * │ T[number]          │ 배열/튜플 요소들의 유니언      │ Tup[number] → number | string | boolean│
 * │ T[0], T[1]         │ 튜플의 개별 요소 타입          │ Tup[0] → number 등                     │
 * └────────────────────┴───────────────────────────────┴────────────────────────────────────────┘
 */
