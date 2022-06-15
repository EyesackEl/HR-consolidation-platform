class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role
    }

    getName() {
        return this.name
    }
    
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        if (!this.role) {
            return 'Employee';
        }else if(this.role == 'Manager') {
            return 'Manager';
        }else if(this.role == 'Engineer') {
            return 'Engineer';
        } else if(this.role == 'Intern') {
            return 'Intern';
        };

        console.error("Employee's role not recognized");
    }
};

module.exports = Employee;
