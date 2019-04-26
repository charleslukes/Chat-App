const User = require('./user');
const DB = require('./DB');

let user1 = new User('user1', 'user1@gmail.com', 1111);
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
})

