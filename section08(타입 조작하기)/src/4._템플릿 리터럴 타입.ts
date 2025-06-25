/**
 * 템플릿 리터럴 타입
 */
type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";
// type ColoredAnimal = "red-dog" | "red-cat" | "green-chicken";
// 각각 조합을 하나씩 다 union타입으로 작성하기 힘들다.

type ColoredAnimal = `${Color} - ${Animal}`;

/**
 * 사용 사례
 *  - 문자열 조합을 자주 다루는 경우 / 오타 방지가 중요한 경우
 */
// ******** 사례1. API 경로 조합할 때 **********
type Version = "v1" | "v2";
type Resource = "users" | "posts";

type ApiPath = `/api/${Version}/${Resource}`;
// "/api/v1/users" | "/api/v2/posts"

// ******** 사례2. 다국어(i18n) **********
type Lang = "en" | "ko";
type Label = "title" | "content";

type LocaleKey = `${Lang}.${Label}`;
// "en.title" | "ko.content"

function getTranslation(key: LocaleKey) {
  /* ... */
}

getTranslation("ko.title"); // ✅
getTranslation("jp.title"); // ❌ (타입 에러)
