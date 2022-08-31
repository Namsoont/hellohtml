//array_reduce.js

const numbers = [2, 3, 8, 5, 1];

let sum = 0;
numbers.forEach(number => {
    sum += number;
})

console.log(sum);

let result = numbers.reduce(function (acc, val, idx, ary) { //(a, b, c, d)
    // console.log(a,b,c,d);
    // return a + b;
    return acc + val;
}, 0);

result = numbers.reduce((acc, val, idx, ary) => { //누적초기값.
    console.log(acc, val);
    acc.push(val + 2); // [4, 5, 10, 7, 3] 
    return acc;
}, []); //[]새로운값을 반환.

// <ul><li>2</li><li>3</li><li>8</li><li>5</li><li>1</li></ul>
result = numbers.reduce((acc, val, idx) => {
    console.log(acc);
    if (idx == 0) {
        acc = '<ul>'; //첫번째 순번일때만 ul추가
    }
    acc += '<li>' + val + '</li>';
    if (idx == numbers.length - 1)
        acc += '</ul>';

    return acc; // 다음순번의 누적초기값으로 사용.
}, '');
document.write(result);

console.log('최종결과: ' + result);
// 배열요소의 max 값.
let max = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max)
        max = numbers[i];
}
console.log('최대값: Max: ' + max)

// result = numbers.reduce((acc, val) => {
//     if (val > acc) {
//         return val;
//     } else {
//         return acc;
//     }
// }, numbers[0]);
// console.log('최종결과: ' + result);

result = numbers.reduce((acc, val) => {
    return acc > val ? acc : val;
}, Number.MIN_SAFE_INTEGER); //MAX_SAFE_INTEGER 는 최소값으로 나옴
console.log('최종결과: ' + result);


