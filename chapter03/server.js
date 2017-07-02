// express 모듈을 호출
const express = require('express');

// express 객체 생성
const app = express();

// use 함수를 이용하여 응답처리
app.use('/', (req, res) => {
    res.status(200).send('Hello World');
});

// 서버 실행.
app.listen(3000);

console.log('웹서버를 시작합니다. => http://localhost:3000/');

module.exports = app; // 혹시나 모듈로 만듦 , 생략해도 아직은 필요 없음.