const User = require('./user');
const DB = require('./DB')
const Admin = require('./Admin');


let user1 = new User('mickey', 'mick@gmail.com', 123);
let user2 = new User('spartan','spar@gmail.com', 222);
let user3 = new User('amak','amak@gmail.com', 111);
let user4 = new User('josmak','josk@gmail.com', 333);
let user5 = new User('marcus','marcus@gmail.com', 444);
let user6 = new User('piro','piro@gmail.com', 456);

let admin = new Admin('admin', 33334);
console.log(user1.viewRooms());
console.log('admin accessing a user prototype', admin.viewRooms());
console.log(user1.joinRoom('teens'));
console.log(user3.joinRoom('teens'));
console.log(user1.joinRoom('jdwe'));
console.log(user2.joinRoom('Adults'));
console.log(user1.sendChatMessage('teens', 'Hi guys'));
console.log(user3.sendChatMessage('teens', 'Hey mickey'));

console.log(user2.leaveRoom('teens'))
console.log(user2.sendReport('Why can\'t I send message to teens room?'));

console.log(DB);
console.log(DB.rooms);
console.log();
console.log(DB.rooms.teens)
console.log(DB.rooms.teens[2])


console.log();
console.log(DB.rooms.adults);
console.log(DB.rooms.adults[2]);



