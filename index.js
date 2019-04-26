const User = require('./user');
const DB = require('./DB')
const Admin = require('./Admin');


let user1 = new User('mickey', 'mick@gmail.com', 123);
let user2 = new User('spartan','spar@gmail.com', 222);
let user3 = new User('amak','amak@gmail.com', 111);
let user4 = new User('josmak','josk@gmail.com', 333);
let user5 = new User('marcus','marcus@gmail.com', 444);
let user6 = new User('piro','piro@gmail.com', 456);

console.log(user1.joinRoom('teens'))
console.log(DB);