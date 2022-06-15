const Intern = require('../lib/Intern');

const intern = new Intern('Isaac', '1', 'isaac.laflamme@gmail.com', 'Intern', 'WSU');

describe('Intern Class', () => {
    it("Intern role should default to 'Intern ", () => {
        const intern = new Intern('Isaac', '1', 'isaac.laflamme@gmail.com', 'Intern');
        
        expect(intern.getRole()).toBe('Intern');
    })
    it('Intern name should mimic inputted name', () => {
        expect(intern.getName()).toBe('Isaac');
    })
    it('Intern id should mimic the inputted id', () => {
        expect(intern.getId()).toBe('1');
    })
    it('Intern email should mimic the inputted email', () => {
        expect(intern.getEmail()).toBe('isaac.laflamme@gmail.com');
    })
    it('Intern school should mimic the inputted school', () => {
        expect(intern.getSchool()).toBe('WSU');
    })
});