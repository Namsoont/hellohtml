//dom_manipulate2
// document.querySelectorAll('button');
// document.querySelectorAll('button');
const members = [{
        mid: 'admin',
        name: '관리자',
        mphone: '010-1111-2222'
    },
    {
        mid: 'hong12',
        name: '홍길동',
        mphone: '010-5555-4455'
    },
    {
        mid: 'parkkr',
        name: '관리자',
        mphone: '010-7777-8822'
    }
]

document.addEventListener('DOMContentLoaded', function () {

    // 등록버튼 이벤트.
    let addBtn = document.querySelector('button');
    addBtn.addEventListener('click', addMember)
    showMember();

    //회원 찾기 이벤트.
    let findBtn = document.getElementById('findMember');
    findBtn.addEventListener('click', findMember);
    //전체선택/해제 이벤트.
    //전체선택/해제 이벤트
    let allcheck = document.getElementById('allCheck')
    allcheck.addEventListener('change', allchecked);

}); // dom요소에 이벤트 등록.

// 체크박스
function allchecked() {
    //ture / false 값은 this의 checked 값을 할당
    let chks = document.querySelectorAll('tbody input[type="checkbox"]')
    chks.forEach(check => {
        check.checked = this.checked;
    })
    
}

function findMember() {
    //찾을 아이디
    let id = document.getElementById('mid').value;

    console.log(id);

    let trs = document.getElementsByTagName('tbody')[0].children;
    trs = document.querySelectorAll('tbody>tr');
    console.log(trs); //NodeList [tr, tr, tr]
    trs.forEach(tr => {
        // tr.className = ''; //클래스 속성값을 변경.
        tr.removeAttribute('class');
    })

    trs.forEach(tr => {
        console.log(tr.firstElementChild.textContent);
        if (tr.firstElementChild.textContent == id) {
            tr.setAttribute('class', 'focus');
        }
        //변경
        trs.forEach(tr => {
            if (tr.firstElementChild.textContent == id) {
                tr.setAttribute('Class', 'focus');
                // tr.firstElementChild.nextElementSibling.innerText = document.getElementById('mname').value;
                // tr.firstElementChild.nextElementSibling.nextElementSibling.innerText = document.getElementById('mphone').value;

                let childTd = tr.children;
                childTd[1].textContent = document.getElementById('mname').value;
                childTd[2].textContent = document.getElementById('mphone').value;
            }

        })

    });
}

// 리스트 보여주기
function showMember() {
    let table = document.getElementById('list');
    members.forEach(member => {
        let mvalues = [];
        // objet - >array
        // for (let prop in member) {
        //     mvalues.push(member[prop]);
        // }
        mvalues = Object.values(member); //Object.keys(member):[속성,속성]
        let tr = makeTr(mvalues);
        table.appendChild(tr);
    })
}


function addMember() {
    let mid = document.getElementById('mid');
    let mname = document.getElementById('mname');
    let mphone = document.getElementById('mphone');

    console.log(mid.value, mname.value, mphone.value);

    // 저장값이 없으면 warning.
    if (!mid.value || !mname.value || !mphone.value) {
        alert('필수값을 입력하세요!!');
        return; //함수 종료.
    }

    const mvalues = [mid.value, mname.value, mphone.value]
    let tr = makeTr(mvalues);

    document.getElementById('list').appendChild(tr);

    //초기화

    mid.value = '';
    mname.value = '';
    mphone.value = '';
    mid.focus();

} // end of addMember().

function makeTr(mvalues = []) {
    let tr = document.createElement('tr');
    tr.addEventListener('click', function () {
        // console.log(this.firstElementChild.innerText);
        let id = this.firstElementChild.innerText; //<td><button>user1</button></td>
        let name = this.firstElementChild.nextElementSibling.innerText;
        let phone = this.firstElementChild.nextElementSibling.nextElementSibling.innerText;

        document.getElementById('mid').value = id;
        document.getElementById('mname').value = name;
        document.getElementById('mphone').value = phone;

        //document.getElementById('mid').value = this.firstElementChild.innerText;
        //document.getElementById('mname').value = this.firstElementChild.nextElementSibling.innerText;

    }, false);

    mvalues.forEach(val => {

        let td = document.createElement('td'); // id 위치 <td>user1</td>
        let txt = document.createTextNode(val);
        td.appendChild(txt); // <td>user1</td>
        tr.appendChild(td); // <tr><td>user1</td></tr>
    });

    //삭제버튼 추가.
    let td = document.createElement('td');
    let btn = document.createElement('button');
    let txt = document.createTextNode('삭제');
    btn.addEventListener('click', function (e) {
        this.parentElement.parentElement.remove(); //tr삭제.
        e.stopPropagation(); // 이벤트 전파 차단.
    }, false);

    btn.appendChild(txt);
    td.appendChild(btn);
    tr.appendChild(td); //<tr><td><button>삭제</button></td></tr>

    //체크박스 추가.
    //<tr><td><input id="allcheck" type="checkbox"></td></tr>
    let chk = document.createElement('input');
    chk.addEventListener('click', function (e) {
        //tr의 이벤트가 발생하지 않도록 하기 위해서.
        e.stopPropagation();
    })
    chk.addEventListener('change', function() {
        let checkProp = document.querySelectorAll('tbody tr input[type="checkbox"]')
        let checkAry = [];
        checkProp.forEach(item => {
            checkAry.push(item);
        })
        //[input, input, input] 배열(forEach) : every()다만족하면 true  만족못하면 flase || some()
        document.getElementById('allCheck').checked = [...checkProp].every(item => item.checked); //{return item.checked == true} 줄인값.
        
    })
    // chk.checked = true; //체크.
    chk.setAttribute('type', 'checkbox');
    td = document.createElement('td');
    td.appendChild(chk);
    tr.appendChild(td);
   
    return tr;
}

