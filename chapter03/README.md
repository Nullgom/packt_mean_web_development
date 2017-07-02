Express 애플리케이션 만들기
=========================

- 익스프레스 설치하고, 새로운 익스프레스 애플리케이션 만들기
- 프로젝트 구조 구성하기
- 익스프레스의 라우팅 사용하기
- EJS 뷰 렌더링 사용법
- 서버 고정(Static) 파일 사용
- 익스프레스 세션 설정하기

## 익스프레스 설치

```shell
    > npm init

    > npm install express --save
```
```js
    {
        "name" : "mean-express", // 소문자로 만 입력
        "version" : "0.0.3",
        "dependencies" : {
            "express" : "^4.14.0"
        }
    }
```

## 첫 익스프레스 애플리케이션 만들기
```js
    // server.js
    const express = require('express');
    const app = express();
    
    app.use('/', (req, res) => {
        res.status(200).send('Hello World');
    });

    app.listen(3000);
    console.log('웹 서버를 시작합니다 : http://localhost:3000/');
    
    module.exports = app; // 이 부분은 현재로선 생략해도 됨.
```