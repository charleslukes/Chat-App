const DB = require('./DB');

function access(name){
    return DB.rooms.hasOwnProperty(name) || `Room doesn't exists`
}

module.exports = access;
