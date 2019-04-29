const Admin = require('./Admin');
const User = require('./user');
const DB = require('./DB');

let admin = new Admin('admin', 4444);
let user = new User('user', 'user@gmail.com', 2232);
describe('Admin constructor', () => {
    it('Should be defined', () => {
        expect(admin).toBeDefined();
    });
    it('Should have access to users prototype', () => {
        expect(admin.viewRooms()).toContain('adults');
    });
    it('Should be able to view one user',() => {
        expect(admin.viewOneUser('user')).toBe(DB.users[0]);
        expect(admin.viewOneUser('efrfe')).toBe('username is invalid');
    });
    it('Should be able to view all users',() => {
        expect(admin.viewAllUsers()).toEqual(DB.users);
    });
    it('Should be able to delete one user',() => {
        expect(admin.deleteOneUser('user')).toBe('user deleted successfully');
        expect(DB.users[0]).toBe(0);
        expect(admin.deleteOneUser('efrfe')).toBe('username is invalid');

    });
    it('Should be able to delete one user',() => {
        expect(admin.deleteAllUsers()).toBeDefined();
        expect(admin.deleteAllUsers()).toBe('user database all whiped off');
        expect(DB.users).toEqual([]);

    });
    it('Should read users reports', () => {
        expect(admin.readReports()).toBeDefined();
        expect(admin.readReports()).toBe(DB.user_reports);

    })
})