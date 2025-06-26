// 블로그 플랫폼을 만들자고 생각해보자.

/**
 * 맵드 타입 기반
 *
 * Partial<T>
 * Required<T>
 * Readonly<T>
 *
 */

// ----------------------------- Partial ----------------------------
//  특정 객체 타입의 "모든 프로퍼티를" "선택적 프로퍼티"로 바꿔주는 타입이다.

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

/**
 *  임시저장을 할 경우, Post 타입으로 사용하면,
 *  임시저장이기 때문에, 모든 프로퍼티에 데이터가 있는게 아니라 에러가 발생할 수 있다.
 */
const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안..",
};

// ----------------------------- Required ----------------------------
// 특정 객체의 "모든 프로퍼티를" "필수 프로퍼티로" 바꿔주는 타입

const withThumbnailPost: Post = {
  title: "썸네일이 꼭 있어야 해",
  tags: ["ts", "js"],
  content: "초안..",
}; // 이렇게 사용하면 thumbnailURL이 선택적 프로퍼티이기 때문에, 원하는 형태가 아니다.
// 이런 경우 required를 사용한다.

const withThumbnailPost2: Required<Post> = {
  title: "썸네일이 꼭 있어야 해",
  tags: ["ts", "js"],
  content: "초안..",
  thumbnailURL: "https://imgae.image.com/150",
};

// Required를 직접 구현해보자
type Required<T> = {
  [key in keyof T]: T[key];
};

// ----------------------------- Readonly ----------------------------
// 특정 객체타입의 "모든 프로퍼티를" "readOnly"로 바꿔주는 타입

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글 입니다.",
  tags: [],
  content: "",
};

readonlyPost.title = "변경할래";

// Readonly 만들어보기
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};
