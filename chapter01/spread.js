/**
 * Default, Rest and Spread
 * 
 */
// 기본 매개변수 사용.
function add(x, y = 0) {
    return x + y;
}
console.log('add(1) => ' + add(1));
console.log('add(1, 2) => ' + add(2, 3));

// 나머지 매개변수
function userFriends(user, ...friends) {
    console.log(user + ' 는 ' + friends.length + '명의 친구를 알고 있다.');
};
userFriends('철수', '영희', '순득', '기영');
userFriends('기효', '송이', '길동');

// 스프레드 매개 변수 사용..
function userTopFriends(firstFriend, secondFriend, thirdFriends) {
    console.log(firstFriend);
    console.log(secondFriend);
    console.log(thirdFriends);
}
// 매개변수 ..[]배열읠 입력하면.. 순서되로 매핑 된다.
userTopFriends(...['앨리스', '밥존슨', '마이클', '브래드피트']);