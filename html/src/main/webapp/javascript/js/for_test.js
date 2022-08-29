// for_test.js


const tempArr = [];
for (let i = 0; i < 5; i++) {
    let temp = Math.ceil(Math.random() * 100);
   tempArr[i] = temp;
}
tempArr.forEach(val => document.write(`<p>${val}</p>`));

let max = tempArr[0];
tempArr.forEach(val => {
    if (val > max) {
        max = val;
    }
});
console.log('Max : ' + max);

// 함수의 스코프 체인.
var a = 1;
var b = 5;

function outerFunc() {
    function innerFunc() {
        a = b;
    }
    console.log(a);
    a = 2;
    b = 4;
    innerFunc();
    console.log(a); //4
    var b = 2;
    console.log(b); //2
}
outerFunc();
console.log(b); //5
