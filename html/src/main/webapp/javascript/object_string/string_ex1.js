// String_ex.js
let items ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint itaque a quam nemo quas doloremque assumenda molestias nostrum vitae voluptatibus nobis obcaecati temporibus ipsam dolore placeat, accusantium cum non quasi.';

let bdy = document.querySelector('body'); //body태그 찾아서 dby변수할당.
let div = document.createElement('div'); // div element 생성.
bdy.append(div); //body 자식요소로 붙임.

let words = items.split(' ');
words.forEach(word => {
    let span = document.createElement('span'); // <span></span>
    span.innerText = word; 



   div.append(span); 
});

let inp = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = '찾기';
inp.onchange = function() { //엔터
    //버튼을 클릭하면... 실행할 함수 
    let findWord = inp.value;
    let spans = document.querySelectorAll('span');
    // console.log(findWord);
    // console.log(spans);
    spans.forEach(function(span){
        //<span>Lorem,</span> <span>inpsum</span>
        // findWord == span.unnerText => span.remove();
        if(findWord == span.innerText) {
            span.remove();
        }
    });
    inp.value = '';
    inp.focus();
}

document.querySelector('div').after(inp, btn);


