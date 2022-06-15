const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role)

        this.github = github;
    }

    getGithub() {
        return this.github
    }
};

const isaac = new Engineer('isaac', '1', 'email', 'Engineer', 'eyesackEl');

console.log(isaac.getRole());

module.exports = Engineer;