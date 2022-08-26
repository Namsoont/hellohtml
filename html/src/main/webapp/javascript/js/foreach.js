// foreach.js
const members = [
    {id: 'user1', name: '홍길동', score: 95, phone: '010-123-1234', gender: 'M'},
    {id: 'user2', name: '이순신', score: 85, phone: '010-321-1234', gender: 'M'},
    {id: 'user3', name: '에스파', score: 70, phone: '010-132-1234', gender: 'W'},
    {id: 'user5', name: '거북선', score: 55, phone: '010-213-1234', gender: 'M'},
    {id: 'user4', name: '있지', score: 80, phone: '010-312-1234', gender: 'W'}
];
// for 반복문. 배열메소드(forEach)
// members.forEach(function(val, ind, ary) => {
//     console.log(val.phone);
// });
let str = '<table border=1>';
str +='<tr><th>아이디</th><th>이름</th><th>연락처</th><th>성별</th></tr>'

members.forEach(function(val, ind, ary){
    // if (val.gender =='M') {
    //     str += makeTr(val, 'blue');
    // } else if (val.gender == 'W') {
    //     str += makeTr(val, 'red');
    // }
    console.log(val.phone);
 });
document.write(str);

// function makeTr(men, color) {
//     let tr = `<tr style='color: ${color}' >`;
//     for (let prop in men) {
//         tr += 
//     }
// }

// 맨위에꺼랑 같음. 코드길어지면 밑에꺼
members.forEach(callBackFnc);

function callBackFnc(val, ind, ary) {
    console.log(val);
}