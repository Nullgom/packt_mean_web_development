/**
 *  화살표 함수 () => {}
 */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evens = [];
const squares = numbers.map(n => n * n);
console.log("제곱 결과: " + squares);

numbers.forEach(n => {
    if (n % 2 === 0) evens.push(n);
});

console.log("짝수 => " + evens);

const author = {
    fullName: "Bob Alice",
    books: ['JavaScript Programming', 'Node.js Essential', 'Pro React.js'],
    printBooks() { // 단축 메서드 정의
        this.books.forEach(book => console.log(book + ' by ' + this.fullName));
    }
};

author.printBooks();