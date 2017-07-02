const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World');
}).listen(3000);
console.log('웹 서버가 시작되었습니다. http://localhost:3000/');