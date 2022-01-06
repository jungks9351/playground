## CRA

## 환경변수 설정

루트 폴더에 .env 파일 생성

무조건 "REACT_APP\_" 으로 시작해야 합니다.

```
REACT_APP_API_URL: [URL]
```

jsx 파일에서의 사용

```jsx
const API_URL = process.env.REACT_APP_API_URL;
```

**환경변수 변경 시 서버를 재시작해야합니다.**
