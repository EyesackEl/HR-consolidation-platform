const Employee = require('../lib/Employee');

const employee = new Employee('Isaac', '1', 'isaac.laflamme@gmail.com');

describe('Employee Class', () => {
    it('Employee role should default to "employee"', () => {
        expect(employee.getRole()).toBe('Employee');
    })
    it('Employee name should mimic inputted name', () => {
        expect(employee.getName()).toBe('Isaac');
    })
    it('Employee id should mimic the inputted id', () => {
        expect(employee.getId()).toBe('1');
    })
    it('Employee id should mimic the inputted id', () => {
        expect(employee.getEmail()).toBe('isaac.laflamme@gmail.com');
    })
});