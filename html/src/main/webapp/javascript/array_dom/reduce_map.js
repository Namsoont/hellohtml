// reduce_map.js

//Array.prototype.map(); => 매핑 (A -> A')
//Array.prototype.filter(); => 필터링 (A -> a) 조건의 맞는값 

const names = ['이현성', '이주훈', '황용주', '최승현'];
let mapfun = (name, idx) => {
    let obj = {}
    obj.name = name;
    obj.sno = idx + 1;  //{name:'이현성', sno: 1}
    return obj;
}

let filfnc = (member) => {
    //     //return값이 true이면 반환, false이면 반환이 없음.
    return member.name.startsWith('최');  
}

// map메소드.
let members = names.map(mapfun);
console.log(members);

// //filter 메소드.
let lees = members.filter(filfnc);
console.log(lees);

// map.filter 메소드 체인.
let result = names.map(mapfun)
                  .filter(filfnc);
console.log(result);


mambers = names.reduce((acc, val, idx) => {
    let obj = {};
    obj.name = val;
    obj.sno = idx +1;
    acc.push(obj); //[{name:'이현성', sno:1}]
    return acc;
}, []);
console.log(mambers);

// reduce 로 filter와 같은 기능 구현.
lees = members.reduce((acc, val) => {
    if(val.name.startsWith('이')) {
        acc.push(val);
    }
    return acc;
}, [])
console.log(lees);

let reduceMapFnc = (acc, val, idx) => {
    let obj = {};
    obj.name = val;
    obj.sno = idx +1;
    acc.push(obj); 
    return acc;
}

let reduceFilFnc = (acc, val) => {
    if(val.name.startsWith('황')) {
        acc.push(val);
    }
    return acc;
}

// 메소드 체인.
result = names.reduce(reduceMapFnc, []).reduce(reduceFilFnc, [])
console.log(result);


// map.filter 메소드 체인.
// let result1 = names.map((name, idx) => {
//     let obj = {}
//     obj.name = name;
//     obj.sno = idx + 1; 
//     return obj;
// }).filter((member) => {
//     return member.name.startsWith('이');  
// });
// console.log(result);

// // map메소드.
// let members1 = names.map((name, idx) => {
//     // let obj = {}
//     // obj.name = name;
//     // obj.sno = idx + 1; //{name:'이현성', sno: 1}
//     // return obj;
// });


// // filter 메소드.
// let lees1 = members.filter((member) => {
//     //return값이 true이면 반환, false이면 반환이 없음.
//     return member.name.startsWith('최');
    
// });

// reduce 로 map과 같은 기능 구현.