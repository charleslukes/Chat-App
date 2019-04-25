const user = require('./user');
const DB = require('./DB');

function Admin(name, password){
    user.call(this, name, password);
    DB.admin.push(this);
}

//admin inherit from the user function
Admin.prototype = Object.create(user.prototype);
Admin.prototype.constructor = Admin;


let admin = new Admin('charles', 2345);
console.log(admin.viewRooms());
console.log(DB)