const DB = require('./DB');


//creating the user constructor
function User(username, password){
    this.username = username;
    this.password = password;
    DB.users.push(`username: ${this.username}, password: ${this.password}`);
}

//user check for available rooms
User.prototype.viewRooms = function viewRooms(){
    return Object.keys(DB.rooms);
}

//user can join room
User.prototype.joinRoom = function(roomName){
    let name = roomName.toLowerCase();
    let access = false;
    if (DB.rooms.hasOwnProperty(name)) {
        access = true;        
    }
    else{
        return `Room doesn't exists`
    }
    if(access && DB.rooms[name][0].roomCount < 5){
        //store members username.
        DB.rooms[name][1].members.push(this.username);

        DB.rooms[name][2].forum.push(this.username + ` just joined`);
        //check the amount of users in the chat room
        DB.rooms[name][0].roomCount++;

        return `Welcome to ${name} room ${this.username}`
    }
    else{
        return `Room is full, please join another`;
    }  
}

User.prototype.sendChatMessage = function(roomName, message){
    let name = roomName.toLowerCase();
    
    let access = false;
    if (DB.rooms.hasOwnProperty(name)) {
        access = true;        
    }
    else{
        return `Room doesn't exists`
    }
    //check if user is a member the room
    if(access && DB.rooms[name][1].members.includes(this.username)){
        let chat = {};
        chat[this.username] = message;
        DB.rooms[name][2].forum.push(chat);
        return `message delivered`
    }
    else{
        return `You're not a member of this room, please join room.`
    }
}

module.exports = User;


let user1 = new User('mickey', 123);
let user2 = new User('spartan', 222);
let user3 = new User('amak', 111);
let user4 = new User('josmak', 333);
let user5 = new User('marcus', 444);
let user6 = new User('piro', 456);


console.log(user1.viewRooms())
console.log(user1.joinRoom('teens'));
console.log(user2.joinRoom('teens'));
console.log(user3.joinRoom('teens'));
console.log(user4.joinRoom('teens'));
console.log(user5.joinRoom('teens'));
console.log(user6.joinRoom('teens'));


console.log(user5.sendChatMessage('teens', 'Hey guys'));
console.log(user1.sendChatMessage('teenhds', 'Whats up guys'));



console.log(DB.rooms.teens[2])

console.log(DB)