//variable_ref 원시형 vs 참조형 타입

let str = 'Hello'; //String
let str1 = new String('Hello'); // object타입

console.log(str == str1); //값을 비교
console.log(str === str1); //값과 데이터 타입 비교.

let num1 = 20; // number
let num2 = new Number(20); //object

console.log(num1 == num2);

let obj; // undefined.
obj = null; // null.

let sym = Symbol('symbol'); //unique 키 값을 생성.
let sym1 = Symbol('symbol'); //
console.log(sym == sym1);

//객체(object)
obj = {
    sname: 'Hong', //속성: 속성값.
    age: 20,
    showAge: function() {
        console.log('나이는 : ' + this.age + '입니다.');
    }//메소드
}
console.log(obj.sname);
console.log(obj['age']);
obj.showAge();

obj.sname = 'Hwang'; //값 할당.

//배열
const numbers = []; // new Array();
numbers[numbers.length] = 10; // 추가
numbers[numbers.length] = 20; // 추가
numbers[numbers.length] = 30; // 추가

numbers.forEach(function(val) {
    console.log(val);
}); // 메소드(콜백함수(값, 인덱스, 배열))  


const randomVals = [];
for (let i=0; i<5; i++) {
    let val = Math.ceil(Math.random()*10); // 0 ~ 1 임의값을 생성.
    randomVals[i] = val;
}
randomVals.forEach(function(val) {
    if(val > 5) {
        console.log(val);
  }
});
// [3, 1, 6, 9, 4]
randomVals.splice(0, randomVals.length); // 
// Math.random() : 0 ~ 1 임의값 생성.
// 21 ~ 50 까지의 임의 값을 생성. : Math.ceil(Math.random()*30)+20
// console.log(randomVals);
//console.log(Math.ceil(.8)); // 0 ~ 1 
for (let i=0; i<5; i++) {
    randomVals[i] = Math.ceil(Math.random() * 30) + 20;
}
console.log(randomVals);
console.clear(); // 콘솔메세지 초기화.
randomVals.forEach(showEven); //짝수만 출력

// 콜백함수.(callback function).
function showEven(val) {
    if(val % 2 == 0) {
        console.log(val);
    }
}

console.log( -'3' + 4); // +34 가됨  *면 12 /'34' : 숫자형 변환.

console.log((3).toString()); // 숫자타입을 문자타입으로 변환.

console.log(Math.abs(-20));
console.log(Math.sign(-30));

console.clear();
const arr = [-3, 2, -45, 0, 4, 7];
const arr1 = arr.map(function(val){
    return Math.sign(val);
}); //배열의 갯수만큼 콜백함수 실행. = > 새로운 배열 반환.
console.log(arr1);

// Nan, Infinity
console.log(3 / 'five'); //Nan
console.log(-1 / 0); // Infinity











