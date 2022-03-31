const Employee = require('../lib/Employee');

// creates class for engineers based off employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // imports information from employee class
        super(name, id, email);
        // add additional information for engineer class
        this.github = github;
    }

    // method that returns github username
    getGithub() {
        return this.github;
    };

    // method that returns role
    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;