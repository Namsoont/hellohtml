//dom_manipulate2
// document.querySelectorAll('button');
let addBtn = document.querySelector('button');
addBtn.onclick = function() {
    let mid = document.getElementById('mid');
    let mname = document.getElementById('mname');
    let mphone = document.getElementById('mphone');
    console.log(mid.value, mname.value, mphone.value);

    const mValues = [mid.value, mname.value, mphone.value];
    
    // 저장값이 없으면 warning.
    if(!mid.value || !mname.value || !mphone.value) {
        alert('필수 값을 입력하세요!');
        return;  // 함수종료.
    }

    let tr = document.createElement('tr');

    mValues.forEach(val =>{
        let td = document.createElement('td'); // id위치. <td>user1<td1>
        let txt = document.createTextNode(val);
        td.appendChild(txt); // <td>user1</td>
        tr.appendChild(td); // <tr><td>user1<td1></tr>
    });

    document.getElementById('list').appendChild(tr);

    //초기화.
    mid.value = '';
    mname.value = '';
    mphone.value = '';
    mid.focus();
};




// function liston() {
//     let tr = document.createElement('tr');
//     let tdid = document.createElement('td');
//     let tdpw = document.createElement('td');
//     let tdtel = document.createElement('td');

//     let id1 = document.getElementById('mid').value;
//     tdid.innerText = id1;

//     let name1 = document.getElementById('mname').value;
//     tdpw.innerText = name1;

//     let tel1 = document.getElementById('mtel').value;
//     tdtel.innerText = tel1;

//     tr.appendChild(tdid);
//     tr.appendChild(tdpw);
//     tr.appendChild(tdtel);


//     document.getElementById('list').appendChild(tr);
// };