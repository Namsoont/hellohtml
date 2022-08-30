// object_tab
function Table(param) {
    this.members= param;
    this.addMember = function(member) {
        this.members.push(member);
    }
        this.showList = function() {
            // table 태그를 만들어주는 부분.
            let str = '<table border =1>';
            this.members.forEach(member => {
                str += '<tr>'
                for (let prop in member) {
                    str += `<td>${member[prop]}</td>`;
                }
                str += '</tr>'
            })
            str += '</table>';
            return str;
    }
}



let table = new Table(showList);


let members =[{id: 'user1', name:'홍길동', age: 20},
            {id: 'user2', name:'박철희', age: 22},
            {id: 'user3', name:'김민규', age: 25}]

let t1 = new Table(members);

t1.addMember({id: 'user5', name:'최규식', age: 27});
console.log(t1);
// let str = t1.showList();
document.write(t1.showList());

// function Table(param) {

//     this.members = param;

//     this.addMember = function (member) {
//         this.members.push(member);
//     }

//     this.showList = function () {
//         let titles = ['아이디', '이름', '나이'];
//         let tr = '<table border=1>'
//         tr += '<tr>'
//         for (let title of titles) {
//             tr += `<th>${title}</th>`
//         }
//         tr += '</tr>'
//         tr += '<tr>'
//         for (let prop of this.members) {
//             for (let prop1 in prop)
//             tr += `<td>${prop[prop1]}</td>`
//             tr += '</tr>';
//         }
//         tr += '</table>'
//         return tr;
//     }
// }

// let mem_ = [{
//         id: 'user1',
//         name: '홍길동',
//         age: 20
//     },
//     {
//         id: 'user2',
//         name: '박철희',
//         age: 22
//     },
//     {
//         id: 'user3',
//         name: '김민규',
//         age: 25
//     }
// ];

// let t1 = new Table(mem_);
// t1.addMember({
//     id: 'user5',
//     name: '최규식',
//     age: 27
// });
// console.log(t1.members);
// let str_ = t1.showList();
// document.write(str_);