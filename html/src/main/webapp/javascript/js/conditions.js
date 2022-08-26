//conditions.js
const members = [
    {id: 'user1', name: '홍길동', score: 95, phone: '010-123-1234', gender: 'M'},
    {id: 'user2', name: '이순신', score: 85, phone: '010-321-1234', gender: 'M'},
    {id: 'user3', name: '에스파', score: 70, phone: '010-132-1234', gender: 'W'},
    {id: 'user5', name: '거북선', score: 55, phone: '010-213-1234', gender: 'M'},
    {id: 'user4', name: '있지', score: 80, phone: '010-312-1234', gender: 'W'}
];
// 테이블형식(표) =>
// 성별: 남자 => 파란색 글씨, 여자 => 빨간색 글씨

function makeTr(mem={}) {
    let tr = '<tr>';
    for (let prop in mem) {
        if(mem.gender == 'W') {
            tr += `<td style="color: red">${mem[prop]}</td>`;
        } else {
            tr += `<td style="color: blue">${mem[prop]}</td>`;
        }
    }
    tr += '</tr>';
    return tr;
} 
function makeHd() {
    let titles = ['아이디', '이름', '점수', '연락처', '성별'];
    let tr = '<tr>';
    for (let title of titles) {
        tr += `<th>${title}</th>`;
    }
    tr += '</tr>';
    return tr;
}
let str = '<table border=1 style="text-align: center">';
str += makeHd();
for(let member of members) {
    str += makeTr(member);
}
str += '</table>'

document.write(str);





















const passMember = [];

for(let i=0; i<members.length; i++) {
    if(members[i].score > 60) {
        console.log('이름: ' + members[i].name);
        passMember[passMember.length] = members[i].name;
    }
}
console.log(passMember);

const women = []
for (let member of members) {
    if(member.gender == 'W') {
        women[women.length] = member;
    }
}
console.log(women);







// let welcomeFnc = function (param) {
//     console.log('welcome ' + param);
// }
// // 화살표 함수.
// let helloFnc = param => console.log('Hello ' + param);

// //함수를 매개값으로 받는 함수.
// function callFunc(fnc) {
//     let name = 'Hong';
//     fnc(name);
// }
// callFunc(helloFnc);
