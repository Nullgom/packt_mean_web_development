/**
 *  변수 선언 Let 과 상수 선언 Const
 */
// var 로 선언한 값
console.log('Var 로 선언한 i 값 비교.............');

function iterateVar() {
    for (var i = 0; i < 10; i++) {
        console.log('for문 안에서 i 값 :' + i);
    }
    console.log('for문 밖에서 i 값 :' + i);
}

console.log('Let 으로 선언한 i 값 비교.............');

function iterateLet() {
    for (let i = 0; i < 10; i++) {
        console.log('for문 안에서 i 값 :' + i);
    }
    console.log('for문 안에서 i 값 :' + i);
}
iterateVar();
iterateLet();