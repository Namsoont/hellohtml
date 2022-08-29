//for_test2.js
const arr = [];
// arr[arr.length] = 10;

arr.push(10);
arr.push(20);

let obj = {
    snamer: 'Hong',
    age: 20,
    friends:['Park'],
    addFriend: function(friend) {
        this.friends.push(friend);    
    },
    friendList: function() {
        // 친구의 이름을 출력.
        for (let i=0; this.friendList.length; i++ ) {
            console.log(obj.friends[i]);
        }
        
    }
}
obj.addFriend('Kim');
obj.addFriend({name: 'Hwang', phone: '010-1234-1234'});
console.log(obj.friends[2].phone); //['phone']도가능

