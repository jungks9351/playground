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

## 메인페이지

axios GET 요청

hook 사용

useState : state 관리

useEffect : effect 의존

## 로그인 페이지

아이디

비밀번호 확인

토큰 발급

## 회원가입 페이지

아이디 : 이메일 형식

```js
const regexrEmail =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
```

비밀번호 : 숫자, 문자, 특수문자 포함
