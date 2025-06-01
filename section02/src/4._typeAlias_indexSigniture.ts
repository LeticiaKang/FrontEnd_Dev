// ---------------- 4. type Alias(타입 별칭) ----------------
let user1: {
  id: number;
  name: string;
  nickname?: string;
  birth: string;
  bio: string;
  location: string;
} = {
  id: 1,
  name: "kim",
  nickname: "kim",
  birth: "1990-01-01",
  bio: "hello",
  location: "Seoul",
};

let user2: {
  id: number;
  name: string;
  nickname?: string;
  birth: string;
  bio: string;
  location: string;
} = {
  id: 1,
  name: "kim",
  nickname: "kim",
  birth: "1990-01-01",
  bio: "hello",
  location: "Seoul",
};

// 이렇게 되면, 같은 코드가 반복됨. 이럴 때 사용하는게 타입 별칭
// let user3: User 이렇게
type User = {
  id: number;
  name: string;
  nickname?: string;
  birth: string;
  bio: string;
  location: string;
};

let user3: User = {
  id: 1,
  name: "kim",
  nickname: "kim",
  birth: "1990-01-01",
  bio: "hello",
  location: "Seoul",
};

let user4: User = {
  id: 1,
  name: "kim",
  nickname: "kim",
  birth: "1990-01-01",
  bio: "hello",
  location: "Seoul",
};

// ---------------- 4. 인덱스 시그니처(Index Signiture) ----------------
/**
 *  언제 필요한가?
 *     1. 고유한 타입을 사용하고 싶을 때
 *     2. "키" "value"의 타입에 규칙이 있는 경우
 *
 *
        let countryCodes: CountryCode = {
            "South Korea": "string",
            "United States": "string",
            "United Kingdom": "string",
            ... 존재하는 모든 key를 위와 같이 정의하는 것이 아니다.
        };
 *
 *
 */
type CountryCode = {
  [key: string]: string;
};

let countryCodes: CountryCode = {
  "South Korea": "kr",
  "United States": "us",
  "United Kingdom": "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {
  "South Korea": 410,
  "United States": 840,
  "United Kingdom": 826,
};

// ------- 인덱스 시그니처(인덱스 시그니처) 주의할 덤 -------
let countryNumberCodes2: CountryNumberCodes = {};
// 타입오류가 발생해야 할 거 같은데, 발생하지 않음
// 위 객체를 위반하지만 않으면 모두 허용해서 아무런 데이터가 없어서 거를 것도 없는 것임.
type CountryNumberCodes2 = {
  [key: string]: number;
  SouthKorea: number;
  // Africa: string; //이렇게 하면 key: vlaue 타입이랑 다르기 때문에 오류가 난다.
};

let countryNumberCodes3: CountryNumberCodes2 = {
  SouthKorea: 410, // 여기를 주석하면 오류가 남(SouthKorea가 없어서)
  "United States": 840,
  "United Kingdom": 826,
  Africa: 123,
};
