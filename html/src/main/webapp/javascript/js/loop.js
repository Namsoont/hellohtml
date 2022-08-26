// loop.js

let numbers = [23, 33, 14, 52, 77, 55, 16];
//짝수합/홀수번째 위치 => result.
// for(let i = 0; < numbers.length; i++) {
//     if (i % 2 == 0) {  30보다 큰값: numbers[i] >30
//         result += numbers[i];
//     }
// }
// console.log('짝수합/ 홀수번째 위치:' + result);
// 1)
// let result = 짝수합;

let result = 0;
for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        result += numbers[i];
    }
}

console.log('짝수 합 : '+ result);
//2)
result = 0;
numbers.forEach((a,b,c) => {
    if (a % 2 == 0){  //30보다 큰값: a>30
    result += a;
    }
});
console.log('짝수합: ' + result);