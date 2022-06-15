const Manager = require('../lib/Manager');

const manager = new Manager('Isaac', '1', 'isaac.laflamme@gmail.com', 'Manager', '1');

describe('Manager Class', () => {
    it('Manager role should default to "manager"', () => {     
        expect(manager.getRole()).toBe('Manager');
    })
    it('Manager name should mimic inputted name', () => {
        expect(manager.getName()).toBe('Isaac');
    })
    it('Manager id should mimic the inputted id', () => {
        expect(manager.getId()).toBe('1');
    })
    it('Manager id should mimic the inputted id', () => {
        expect(manager.getEmail()).toBe('isaac.laflamme@gmail.com');
    })
    it('Manager office number should mimic the inputted office number', () => {
        expect(manager.getOfficeNumber()).toBe('1');
    })
});