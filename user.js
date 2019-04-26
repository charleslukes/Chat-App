const DB = require('./DB');
const access = require('./roomAccess')

//creating the user constructor
function User(username,email, password) {
    this.username = username.toLowerCase();
    this.email = email;
    this.password = password;

    DB.users.push(this);
}


//user check for available rooms
User.prototype.viewRooms = function viewRooms() {
    return Object.keys(DB.rooms);
}

//user can join room
User.prototype.joinRoom = function (roomName) {

    let name = roomName.toLowerCase();
    //Room access validation
    access(name);

    if (access && DB.rooms[name][0].roomCount < 5) {
        if(DB.rooms[name][1].members.includes(this.username)){
            return `You are already a member of this room`;
        }
        else{
        //store members username.
        DB.rooms[name][1].members.push(this.username);

        DB.rooms[name][2].forum.push(this.username + ` just joined`);
        //check the amount of users in the chat room
        DB.rooms[name][0].roomCount++;

        return `Welcome to ${name} room ${this.username}`
       }
    }
    else {
        return `Room is full, please join another`;
    }
}

User.prototype.sendChatMessage = function (roomName, message) {

    let name = roomName.toLowerCase();
    //Room access validation
    access(name);

    //check if user is a member the room
    if (access && DB.rooms[name][1].members.includes(this.username)) { 
        let chat = {};
        chat[this.username] = message;
        DB.rooms[name][2].forum.push(chat);
        return `message delivered`
    }
    else {
        return `You're not a member of this room, please join room.`
    }
}

User.prototype.leaveRoom = function (roomName) {

    let name = roomName.toLowerCase();
    //Room access validation
    access(name);

    if (DB.rooms.hasOwnProperty(roomName) && DB.rooms[roomName][1].members.includes(this.username)) {

        DB.rooms[roomName][0].roomCount--;
        for (let i = 0; i < 5; i++) {
            if (DB.rooms[roomName][1].members[i] === this.username) {
                DB.rooms[roomName][1].members.splice(i, 1)
            }
        }
        DB.rooms[roomName][2].forum.push(`${this.username} left`)
        return `You left the chat`;
    }
}

User.prototype.sendReport = function (message) {
    DB.user_reports.push(message);
    return `Message delivered `
}


module.exports = User;