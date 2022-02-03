//server.js
// express 모듈 사용

const express = require('express');
const path = require('path');

//express 사용
const app = express();

// express에서 정적 파일 제공
// 이미지, CSS파일, JS 파일 과 같은 정적 파일을 제공하기 위해서 express 미들웨서 함수인 express.static 사용
// path.join을 사용해서 인자로 받은 값들을 하나의 문자열로 만들어 주고
// /src 경로를 통해 public 폴더에 포함된 파일을 로드할 수 있게 된다.
app.use('/src', express.static(path.resolve(__dirname, 'frontend', 'src')));

// get 요청이 오면 frontend/public/index.html 파일을 읽고 내용을 클라이언트로 전송한다.
app.get('/*', (req, res) => {
  res.sendFile(path.resolve('frontend', 'public', 'index.html'));
});

// 포트 번호 지정 및 서버 실행하기
// 3000번 포트로 실행
app.listen(process.env.PORT || 3000, () => {
  console.log('http://localhost:3000');
});
