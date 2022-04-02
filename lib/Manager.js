const Employee = require('../lib/Employee');

// creates class for managers based off employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // import information from employee class
        super(name, id, email);
        // add additional information for manager class
        this.officeNumber = officeNumber;
    }

    // method that returns office number
    getOfficeNumber() {
        return this.officeNumber;
    }
    
    // method that returns role
    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;