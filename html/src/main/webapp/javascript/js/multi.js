//multi.js : 구구단 출력.

// let str = '';
// var i = 2;
// var j = 1;


// document.write("구구단", "<br>");
// for (i = 2; i < 10; i++) {
//     for (j = 1; j < 10; j++) {
//         document.write(i + " * " + j + " = " + (i * j) + "<br>");
//     }
// }

// document.write(str);

function gugudan(numb) {
    let num = numb;
    let str = '';
    for (let i = 1; i <= 9; i++) {
        // str += '<p>' + num + ' * ' + i + ' = ' + (num * i) + '</p>';
        str += `<p>${num} * ${i} = ${num*i} </p>`;
    }
    return str;
}
let result = gugudan(8);
document.write(result);

let numb = 30;
console.log(`numb의 값은 ${numb} 입니다.`);