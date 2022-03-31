const Employee = require('../lib/Employee');

// creates class for interns based off employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        // import information from employee class
        super(name, id, email);
        // add additional information for intern class
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;