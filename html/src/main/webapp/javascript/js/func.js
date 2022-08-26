// func.js

let num = null;

console.log(num);
// boolean : 0, nullm, undefined, '' => false 로 취급
// 함수선언방식
function sum(num1 = 0, num2 = 0) { 
    // if(!num1 && !num2)
    // return num1 + num2;  // return undefined.<없으면
    // else return 0;
    return num1 + num2;
}

console.log(sum(1, 2)); // 매개값의 개수에 상관없이 계산처리.
//console.log(sum(1)); // Nan(not a Number) => 1 + undefined <-- 계산할 수 없는 값
//console.log(sum() + sum(2,3)); // sum(num1 = 0, num2 = 0) 이런식으로 넣어줘야 값이 나옴

console.log(sum);
//함수표현식
sum = function(num1, num2) { 
    return num1 + num2;
}

//표현식
let showInfo = function (name) {
    return `안녕하세요 ${name}님.`;
}
console.log(showInfo('홍길동'));

let welcome = showInfo;
console.log(welcome('김민수'));

let members = ['승현','용주','준형'];
for (let member of members) {
    console.log(welcome(member));
}