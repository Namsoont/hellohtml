//dom_manipulate.js
//element 생성: createElement()
//textNode생성: createTextNode()
//부모-자식 형성: appendChild()

let frm = document.createElement('form');
frm.setAttribute('action', 'addMember.jsp');
frm.setAttribute('method', 'post');

// 자식요소
let labalId = document.createElement('label');
labalId.setAttribute('for', 'user_id');
labalId.innerText = '아이디: ';
frm.appendChild(labalId);


// 자식요소(input)
let inputId = document.createElement('input');
inputId.setAttribute('type', 'text');
inputId.setAttribute('name', 'user_id');
inputId.setAttribute('id', 'user_id');
frm.appendChild(inputId);

let labalpw = document.createElement('labal');
labalpw.setAttribute('for', 'user_pw');
labalpw.innerText = ' 비번: ';
frm.appendChild(labalpw);

let inputpw = document.createElement('input');
inputpw.setAttribute('type', 'text');
inputpw.setAttribute('name', 'user_pw');
inputpw.setAttribute('id', 'user_pw');
frm.appendChild(inputpw);

let logbutton = document.createElement('button')
logbutton.innerText = '로그인';
frm.appendChild(logbutton);

// div#show의 자식요소로 지정.
document.getElementById('show').appendChild(frm);
console.log(frm);












