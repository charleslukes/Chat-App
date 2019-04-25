const user = require('./user');
const DB = require('./DB');

function Admin(name, password){
    user.call(this, name, password);
    DB.admin.push(this);
}

//admin inherit from the user function
Admin.prototype = Object.create(user.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.viewUser = function(name){
    for (let i = 0; i < DB.users.length; i++) {
        if(name === DB.users[i].username){
            return DB.users[i];
        }   
    }
    return `username is invalid`;
}

let admin = new Admin('charles', 2345);
console.log(admin.viewUser('marcus'));
//console.log(DB)