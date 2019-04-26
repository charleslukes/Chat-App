const DB = require('./DB');

function access(name){
    if (DB.rooms.hasOwnProperty(name)) {
        return true;
    }
    else {
        return `Room doesn't exists`
    }
}

module.exports = access;
