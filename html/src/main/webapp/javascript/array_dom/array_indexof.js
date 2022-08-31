//array_indexof.js

// String.prototype.indexOf()
// Array.prototype.indexOf()
// Array.prototype.some()


const members = ['진정욱','노은경','백나현']
const newMems = ['김민지', '노은경', '정다슬'];

let pos = members.indexOf('노언경'); //없으면 -1
// members 배열에 newMems 추가
//반복문 사용
//member의 값이 members의 배열에 존재하는지 여부 확인
newMems.forEach(member => {
    if(members.indexOf(member) == -1) {
        members.push(member);
    }
})
console.log(pos);

console.log(members); //['진정욱','노은경','백나현','김민지', '노은경', '정다슬'];
members.push('김민');

let result = members.some(member => member == '노은경');
result = members.every(member => member.length == 3);
result1 = members.find(member => member.startsWith('김'));
console.log(result);






