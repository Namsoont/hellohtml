//array_ex1.js
const data = `[{"id":1,"first_name":"Niel","last_name":"Pucknell","email":"npucknell0@army.mil","gender":"Male","salary":5653},
{"id":2,"first_name":"Nicky","last_name":"Raveau","email":"nraveau1@tiny.cc","gender":"Male","salary":9584},
{"id":3,"first_name":"Aldon","last_name":"Ziemecki","email":"aziemecki2@sakura.ne.jp","gender":"Bigender","salary":7991},
{"id":4,"first_name":"Billy","last_name":"Fellis","email":"bfellis3@facebook.com","gender":"Male","salary":2765},
{"id":5,"first_name":"Alexio","last_name":"Gallatly","email":"agallatly4@edublogs.org","gender":"Male","salary":5919},
{"id":6,"first_name":"Thornie","last_name":"Laxe","email":"tlaxe5@joomla.org","gender":"Male","salary":2452},
{"id":7,"first_name":"Massimiliano","last_name":"Faldoe","email":"mfaldoe6@feedburner.com","gender":"Male","salary":3421},
{"id":8,"first_name":"Inger","last_name":"Tocque","email":"itocque7@paypal.com","gender":"Genderfluid","salary":2450},
{"id":9,"first_name":"Karoly","last_name":"Beneix","email":"kbeneix8@goodreads.com","gender":"Female","salary":3592},
{"id":10,"first_name":"Adriana","last_name":"McGarahan","email":"amcgarahan9@mapy.cz","gender":"Female","salary":7661},
{"id":11,"first_name":"Anica","last_name":"Dewire","email":"adewirea@bloglovin.com","gender":"Female","salary":6366},
{"id":12,"first_name":"Nessy","last_name":"Myott","email":"nmyottb@house.gov","gender":"Female","salary":7181},
{"id":13,"first_name":"Glenn","last_name":"Garman","email":"ggarmanc@1und1.de","gender":"Non-binary","salary":9812},
{"id":14,"first_name":"Bendick","last_name":"Bertin","email":"bbertind@imdb.com","gender":"Male","salary":6091},
{"id":15,"first_name":"Fabian","last_name":"Jacmar","email":"fjacmare@spiegel.de","gender":"Non-binary","salary":2010}]`;

let result = JSON.parse(data); // string -> object
result.forEach(element => {
    console.log(element.first_name);
})
// 성별이 Female이고 salary 5000이상인 사람.

let str = result.reduce((acc, val, idx) => {
    if(idx == 0) {
        acc = '<ui>';
    }
    if(val.gender == 'Female' && val.salary > 5000) {
        acc += `<li>${val.id} ${val.first_name} ${val.last_name} ${val.salary}</li>`;

    }
    if(idx == result.length -1) {
        acc += '</ul>'
    }
    return acc;
}, '');


document.write(str);
