/**
 * 맵드 타입 기반
 *
 * Record<T, K>
 *
 * 요즘 화면 크기에 따라 버전을 다양하게 사용하는데,
 * 우리도 그걸 구현해보겠습니다.
 */

// ------------------------------------- Record<T, K> ----------------------------------------
// 객체 타입으로부터 특정 프로퍼티를 제거하는 타입

type Thumbnail = {
  large: {
    url: string;
  };
  samll: {
    url: string;
  };
  watch: {
    url: string;
  };
};

// 이렇게 되면 중복 코드가 많아지고, 좋은 코드는 아니다.

/**
 * Record< 키 , 키에 따른 타입(value)
 */
type Thumbnail2 = Record<"large" | "samll" | "medium" | "watch", { url: string; size: number }>;

//직접 만드어보기
type Record<K extends keyof any, V> = {
  [key in K]: V;
};
