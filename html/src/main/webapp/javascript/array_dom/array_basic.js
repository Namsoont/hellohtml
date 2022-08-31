//array_basic.js
// 배열에 요소추가/ 삭제
//push() : 마지막 추가.. pop() : 마지막 제거
// unshitf() : 첫번째 추가. shift(): 첫번째 제거
//slice(firstindex, lastindex);
//splice(위치, 대체할 갯수, 대체할 값...) : 추가, 수정, 삭제
const names =[];

names[0] = '이현성';
names[names.length] = '황용주';
names[names.length] = '최승현';
names[names.length] = '이주훈';

names.push('자바');

names.pop();
names.pop();
names.shift();

names.unshift('이주훈');

const newNames = names.slice(0,2);
newNames.splice(0, 2, '홍길동');

console.log(newNames) //황용주 이주훈

//추가. 수정. 삭제
// names.splice(0, 3, '김준형', '노은경', '진정욱');
// names.splice(0, 3); //삭제
names.splice(2, 0, '홍길동');

const otherName = names.concat(newNames);
console.log(otherName);

names.length = 0; //크기를 지정/

names.forEach(name => {
    console.log(name);
});