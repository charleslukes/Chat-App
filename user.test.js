const User = require('./user');
const DB = require('./DB');

let user1 = new User('user1', 'user1@gmail.com', 1111);
let user2 = new User('user2', 'user2@gmail.com', 2222);
describe('User constructor ', () => {
    it('Should be defined', () => {
        expect(user1).toBeDefined();
    });
    it('Should send user info to DB', () => {
        expect(user1).toBe(DB.users[0])
    });
    it('Should display available rooms', () => {
        expect(user1.viewRooms()).toContain('teens')
    });
    it('Should return error if room name is invalid', () => {
        expect(user1.joinRoom('hvve')).toBe('Room doesn\'t exists')
    });
    it('Should give access to the user', () => {
        expect(user1.joinRoom('teens')).toBe('Welcome to teens room user1')
    });
    it('Should tell user that he/she already has access', () => {
        expect(user1.joinRoom('teens')).toBe('You are already a member of this room')
    });
    it('Should tell user that he/she already has access', () => {
        DB.rooms.teens[0].roomCount = 5;
        expect(user1.joinRoom('teens')).toBe('Room is full, please join another')
    });
    it('Should send message to room', () => {
        expect(user1.sendChatMessage('teensde', 'Hey guys')).toBe('Room doesn\'t exists');
        expect(user1.sendChatMessage('teens', 'Hey guys')).toBe('message delivered')
        expect(DB.rooms.teens[2].forum).toContain('user1 just joined')
    });
    it('Should not give chat access to non members', () => {
        expect(user1.sendChatMessage('adults')).toBe('You\'re not a member of this room, please join room.');
    });
    it('Should be able to leave chat room', () => {
        expect(user1.leaveRoom('cmrjlf')).toBe('Room doesn\'t exists');
        expect(user1.leaveRoom('teens')).toBe('You left the chat')
        expect(user2.leaveRoom('teens')).toBe('You don\'t have access to this room')
        expect(DB.rooms.teens[0].roomCount).toBe(4)
        expect(DB.rooms.teens[1].members.length).toBe(0)
        expect(DB.rooms.teens[2].forum).toContain('user1 left')
    });
    it('Should send reports to admin', () => {
        expect(user1.sendReport('Need some Info')).toBe('Message delivered')
        expect(DB.user_reports).toContain('Need some Info')
    })
})

