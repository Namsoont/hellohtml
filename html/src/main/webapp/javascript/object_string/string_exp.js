// string_exp

let now = new Date(); //
console.log(now.toDateString()) // Tue Aug 30 2022
// document.write(now.toDateString());
document.write(now.toLocaleDateString() + '<br>'); //2022. 8. 30.
document.write(now.toLocaleTimeString() +'<br>'); //오후 5:28:44
document.write(`${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`+'<br>');

document.write(`${now.getSeconds()<10?'0'+ now.getSeconds():now.getSeconds()}` + '<br>');
document.write(`0${now.getSeconds()}`.slice(-2) + '<br>');

var today = new Date();

document.write(today + '<br>');

document.write('abc'.toUpperCase() + '<br>'); //대문자로변환
document.write('ABC'.toLowerCase() + '<br>'); //소문자로변환

Date.prototype.hhmiss = function() {
    // 09:08:07, 12:34:07,
    Date.prototype.hhmiss = function () {
        // 09:08:07
        console.log(('0' + now.getHours()).slice(-2) + ':' + ('0' + now.getMinutes()).slice(-2) + ':' + ('0' + now.getSeconds()).slice(-2));
    }
    now.hhmiss();
}
document.write(now.hhmiss());
