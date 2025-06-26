/**
 * 맵드 타입 기반
 *
 * Pick<T>
 *
 */

// ------------------------------------- Pick<T, K> ----------------------------------------
// 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입이다.
// "부 분 집 합 타 입"을 만드는 느낌
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글이라 태그가 없어요.",
  content: ".....",
};

// 만들어보기
// type Pick<T, K> = {
//   [key in K]: T[key];
// };
// 오류 나는 이유
// ---> 'K' 형식은 'string | number | symbol' 형식에 할당할 수 없습니다
//      : in 옆에 K는 string, 함수, 객체, never 전부 다 들어올 수 있어서 오류가 난다.

type Pick<T, K extends keyof T> = {
  // K extends keyof 'title' | 'tags' | 'content' | 'thumbnailURL'
  [key in K]: T[key];
};
