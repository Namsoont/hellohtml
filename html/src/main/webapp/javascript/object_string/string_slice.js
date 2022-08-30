// String_slice.js

let str = 'Good, Morning!';
console.log(str.length)
console.log(str.slice(2, 7)) // index:2(exclude) ~ index:7(exclude)
console.log(str.slice(2)) // index:2 ~ 끝까지
console.log(str.slice(2, -2)) // index:2 ~ index: 12(14-2)
console.log(str.slice(-2))  //index 12 (14-2)

console.log(str.substring(0, 7));
// substr(3, 5); index:3 부터 5문자.

// 문자열을 찾아서 인덱스를 반환.
console.log(str.indexOf('Mor'));
console.log('Good Morning, Good Afternon, Good Evening'.lastIndexOf('Good')); //없으면-1

str = 'Good Morning, Good Afternon, Good Evening';
let position = str.indexOf('Good',str.indexOf('Good') + 1); // => 0
console.log(position); // 두번째 Good 문자 있는 위치 인덱스.

// 문자열에서 반복되는 구문의 횟수 찾기.
let cnt = 0;
let pos = str.indexOf('Good');

while(pos != -1) {
    cnt++;
    pos = str.indexOf('Good', pos + 1);
}
console.log(cnt + ' 회')

const members = [
    {name:"황병걸", age: 25},
    {name:"김효인", age: 22},
    {name:"이상욱", age: 18},
    {name:"최근석", age: 29}
]
let searchKey = prompt('찾을이름을 입력.'); 
//members 배열에서 searchKey 을 찾아서 나이 콘솔출력.
members.forEach(member => {
    if(member.name.indexOf(searchKey) != -1) { // includes(searchKey) => true / false
        console.log(member.name + ' 나이는' + member.age + ' 살 입니다.')
    }
})




