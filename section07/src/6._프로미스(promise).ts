/**
 * Promise 객체 사용하기
 * ---> 비동기 API 호출
 */
/**
 * 선수지식
 * - resolve(value) : 비동기 작업이 성공했을 때, 호출되는 함수. value : 리턴값
 * - reject(value) : 비동기 작업이 실패했을 때, 호출되는 함수. value : 실패 이유
 */
/**
 * Promise 객체 사용하기
 * ---> 비동기 API 호출 처리에 주로 사용됨
 */

/**
 * 선수지식
 * - resolve(value) : 비동기 작업이 **성공**했을 때 호출됨. value는 결과값.
 * - reject(value)  : 비동기 작업이 **실패**했을 때 호출됨. value는 에러나 실패 이유.
 */

// 예시
const asyncTask = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("작업 성공");
  } else {
    reject("작업 실패");
  }
});

asyncTask
  .then((result) => {
    console.log("성공 결과:", result);
  })
  .catch((error) => {
    console.error("실패 이유:", error);
  });

// 제네릭을 사용한
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(postId: number): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (postId === 1) {
        resolve({
          id: 1,
          title: "제네릭을 적용한 Promise 예제",
          content: "이 예제는 게시글을 비동기로 불러옵니다.",
        });
      } else {
        reject("해당 게시글이 존재하지 않습니다.");
      }
    }, 1000);
  });
}

function fetchPostList(): Promise<Post[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "첫 글", content: "내용 1" },
        { id: 2, title: "둘째 글", content: "내용 2" },
      ]);
    }, 1000);
  });
}
// 1번 게시글 등록
fetchPost(1)
  .then((post) => {
    console.log("게시글 제목:", post.title);
  })
  .catch((err) => {
    console.error("에러:", err);
  });

fetchPostList().then((posts) => {
  posts.forEach((post) => {
    console.log(`[${post.id}] ${post.title}`);
  });
});
