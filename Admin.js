const user = require('./user');
const DB = require('./DB');

function Admin(name, password){
    user.call(this, name, password);
    DB.admin.push(this);
}

//admin inherit from the user function
Admin.prototype = Object.create(user.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.viewOneUser = function(name){
    for (let i = 0; i < DB.users.length; i++) {
        if(name === DB.users[i].username){
            return DB.users[i];
        }   
    }
    return `username is invalid`;
}

Admin.prototype.viewAllUsers = function(){
    return DB.users;
}

Admin.prototype.deleteOneUser = function(name){
    for (let i = 0; i < DB.users.length; i++) {
        if(name === DB.users[i].username){
            delete DB.users[i];
            DB.users[i] = 0;
            return `${name} deleted successfully`;
        }   
    }
    return `username is invalid`;
}

Admin.prototype.deleteAllUsers = function(){
    DB.users = [];
    return `user database all whiped off`;
}


let admin = new Admin('charles', 2345);
admin.deleteAllUsers();
console.log(admin.deleteOneUser('marcus'));
console.log(DB.rooms.teens)