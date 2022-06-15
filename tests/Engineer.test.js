const Engineer = require('../lib/Engineer');

const engineer = new Engineer('Isaac', '1', 'isaac.laflamme@gmail.com', 'Engineer', 'eyesackEl');

describe('Engineer Class', () => {
    it('Engineer role should default to "Engineer"', () => {
        expect(engineer.getRole()).toBe('Engineer');
    })
    it('Engineer name should mimic inputted name', () => {
        expect(engineer.getName()).toBe('Isaac');
    })
    it('Engineer id should mimic the inputted id', () => {
        expect(engineer.getId()).toBe('1');
    })
    it('Engineer email should mimic the inputted email', () => {
        expect(engineer.getEmail()).toBe('isaac.laflamme@gmail.com');
    })
    it('Engineer github username should mimic the inputted github username', () => {
        expect(engineer.getGithub()).toBe('eyesackEl');
    })
    
});