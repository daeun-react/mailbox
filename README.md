# Redux-saga를 이용한 메일함 사이트

## [🔗 배포 링크](https://daeun-react.github.io/mailbox)

## 시연 영상

![시연 영상](https://user-images.githubusercontent.com/67173064/134781792-820e4ed8-47c2-425e-8940-6c648edd804f.gif)

## 요구 사항 및 구현 기능

- [x] 메일함 이동 및 삭제 기능 구현
- [x] `redux-saga`를 통한 `axios` 비동기 상태 관리
- [x] `light/dark` 테마 적용
  - [x] 기본 사용자 OS 설정에 따른 테마 적용
  - [x] 테마 컬러 변경 토글버튼 구현
- [x] `polyfill` 적용으로 `ie11` 지원

## 설치 및 시작 방법

```js
- git clone https://github.com/daeun-react/mailbox.git
- cd mailbox
- npm install
- .env.development, .env.production 변수 설정
- npm run server && npm start
```

```js
//.env.development
REACT_APP_API_URL = "http://localhost:4000";

//.env.production
REACT_APP_API_URL = "https://raw.githubusercontent.com/daeun-react/mailbox/main/server/data.json";
```
