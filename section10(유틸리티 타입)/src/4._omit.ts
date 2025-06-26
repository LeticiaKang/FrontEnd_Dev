/**
 * 맵드 타입 기반
 *
 * Omit<T, K>
 *
 */

// ------------------------------------- Omit<T, K> ----------------------------------------
// 객체 타입으로부터 특정 프로퍼티를 제거하는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const noTitlePost: Omit<Post, "title"> = {
  tags: [],
  content: ".....",
  thumbnailURL: "",
};

// Omit 만들어보기
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
