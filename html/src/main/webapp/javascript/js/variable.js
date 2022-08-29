//variable.js
var age; //undefined.
let name = 'hong'; //변수선언 - 호이스팅.
//전역변수 / 지역변수

// ES6.
fname = 'hwang'; //변수선언, 전역변수 / 지역변수 / 블랙레벨변수.
console.log(fname);
const PI = 3.14; // 상수 선언 : 재활당 불가.
//PI = 1.23;

console.log(age);
// var age = 20;
age = 20;

function localFnc() {
    var age = 30; // 지역변수
    console.log('지역변수 : ' + age);
    var age = 35;
    console.log('지역변수 : ' + age);

    let fname = 'Kim';
    console.log(fname);
}
localFnc(); 
 {
    let fname = 'Park';
    console.log(fname);
    var age = 22; //전역변수.에러X
 }
console.log('전역변수 : ' + age);
console.log('전역변수 : ' + fname);

console.log(window);

