const connect = require('connect');
const app = connect();

// 로그 출력 함수
function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
};

function helloWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
};

function goodbyeWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>Goodbye World!</h2>');
}

// 로그 출력 함수 미들웨어 등록
app.use(logger);

// 패스에 따른 처리 함수 등록.
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);

app.listen(3000);
console.log('Server running at http://localhost:3000');