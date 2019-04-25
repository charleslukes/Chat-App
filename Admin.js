const user = require('./user');
const DB = require('./DB');

function Admin(name, password){
    user.call(this, name, password);
    DB.admin.push(this);
}

let admin = new Admin('charles', 2345);
console.log(DB)