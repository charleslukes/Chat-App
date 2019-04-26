const DB = require('./DB');

function access(name){
    let access = false;
    if (DB.rooms.hasOwnProperty(name)) {
        access = true;
        return access;
    }
    else {
        return `Room doesn't exists`
    }
}

module.exports = access;
