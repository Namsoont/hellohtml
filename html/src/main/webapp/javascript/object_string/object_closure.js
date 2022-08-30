// object_closure.js
// 1.함수는 변수에 대입가능.
let func = function() {
    console.log('함수호출!!');
}
// 2. 메소드의 매개값으로 대입가능.
let num = [1,2,3];
num.forEach(function(val) {
    console.log(val);
})
// 3. 결과 값으로 함수반환.
function outerFunc(name) {
    let saying = name + ' 안녕!!';
    
    return function() {
        return saying;
    }
}

let closure1 = outerFunc('홍길동'); console.log(closure1);
console.log(closure1());

function initCnt() {
    let cnt = 10; //위로올리면 +1 씩 증가 여기서는 11만나옴
    
    return function addCnt() {
        cnt++;
        console.log(cnt);
    }
    // addCnt();
}

initCnt();

let plusCnt = initCnt(); // let cnt = 10; 자리거 initCnt안에 있을때 쓰면 값증가
plusCnt();
