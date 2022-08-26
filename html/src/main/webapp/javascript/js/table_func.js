// table_func.js

// `<td>${member.id}</td><td>${member.name}</td><td>${member.score}</td>` 같음

function makeTr(mem={}) {
    let tr = '<tr>';
    for (let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '<th><button>확인</button></th>';
    tr += '</tr>';
    return tr;
} 
// '<tr><th>아이디</th><th>이름</th><th>점수</th></tr>' 같음
function makeHd() {
    let titles = ['아이디', '이름', '점수', '연락처', '성별'];
    let tr = '<tr>';
    for (let title of titles) {
        tr += `<th>${title}</th>`;
    }
    tr += '</tr>';
    return tr;
}

//상수 변수
const members = [
    {id: 'user1', name: '최승현', score: 95, phone: '010-123-1234'},
    {id: 'user2', name: '김두영', score: 50, phone: '010-321-1234'},
    {id: 'user3', name: '이주훈', score: 60, phone: '010-213-1234'}
];

let str = '<table border=1>';
// str += '<tr><th>아이디</th><th>이름</th><th>점수</th></tr>';
    str += makeHd();
for(let member of members) { //id name score
     str += makeTr(member); //'<tr>';
    // str += `<td>${member.id}</td><td>${member.name}</td><td>${member.score}</td>`;
    // str += '</tr>';
}

str += '</table>'
document.write(str);
