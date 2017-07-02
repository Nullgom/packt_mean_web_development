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

## 애플리케이션 객체  app.
- *app.set(변수명, 값설정)* : Express 를 구성하는 환경 변수 설정

- *app.get(변수명)* : 환경변수 값 가져오기 

- *app.engine(확장자, 콜백)* : 랜더링할 뷰 엔진 등록 (ejs, pug, swig 등..)
    예) app.engine('html', require('ejs').renderFile);

- *app.use([path], callback)* : 서버에 전송된 http 요청을 처리할  미들웨어 등록, 필요한 경우 특정 패스에 따른 미들웨어 등록.

- *app.VERB(path, [callback...], [callback])* : Http 요청방식에 따른 처리 할 미들웨어나 콜백 함수 등록 , GET 방식은 app.get(), POST 방식은 app.post()

- *app.route(path).VERB([callback...], callback)* : Http 요청 경로에 따라 미들웨어 , 콜백 함수 등록 처리함.
    예) app.route('/user').get(callback).post(callback);

- *app.param([name], callback)* : 어떤 요청에서 파라미터가 포함된 라우팅 경로에 대해 파라미터에 대해 함수를 매핑할 수 있는 메소드임. 예) app.param('userId', callback) 파라미터로 userId가 들어오면 콜백함수로 처리한다..

## 요청 객체 request object
- *req.query* : url에 ?이하로 요청되어지는 쿼리 스트링이다. ?name=john&age=22

- *req.params* : 요청 경로에 포함되어진 파라미터 /users/:id 에서 id 가 파라미터이다.

- *req.body* : post방식으로 요청되어 들어오는 속성값이다. bodyParser() 미들웨어와  
사용함.
- *req.path / req.hostname / req.ip* : 요쳥 경로, 호스트명, 아이피

- *req.cookies* : 사용자 에이전트가 전송한 쿠키를 조회하기 위해 사용. cookieParser() 미들웨어와 사용함.

## 응답 객체 response object
- *res.status(code)* : HTTP 응답 상태 코드를 설정 200 정상, 404 not found , 500 등..

- *res.set(field, [value])* : 응답 HTTP 헤더 설정

- *res.cookie(name, value, [options])* : 쿠키 설정

- *res.redirect([status], url)* : 해당 url로 리다이렉트 응답 처리

 - *res.status(code).send([body])* : 응답 상태 코드와 응답 내용 보내기

 - *res.status(code).json([body])* : 응답 상태 코드와 응답을 json으로 보내기

 - *res.render(viewfile, [locals], callback)* : 뷰 랜더로 HTML로 응답처리

 ## 외부 미들웨어

 - morgan : HTTP 요청 로그 출력 미들웨어
 - body-parser: POST 방식으로 들어 오는 요청 파라미터 req.body를 파싱하는 미들웨어
 - method-override: HTTP 요청 방식 지원하는 미들웨어  클라이언트가 지원하지 않는 PUT, DELETE 경우 지원
 - compression: 응답 데이타를 GZIP/deflate를 사용하여 압축하는 미들웨어
 - express.static, serve-static: 정적 파일을 서비스하는 데 사용하는 미들웨어
 - cookie-parser: 쿠키 파싱 미들웨어 req.cookies 객체를 이전하는
 - express-session: 세션을 사용하기 위한 미들웨어

## MVC를 위한 폴더 구조
```
    - app
      |- controllers
      |- models
      |- routes
      |- views
    - config
      |- env
      |- config.js
    - public
      |- components
      |- css
      |- images
      |- scripts
```