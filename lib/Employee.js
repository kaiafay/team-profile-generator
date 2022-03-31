// create class for employees
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // method that returns name
    getName() {
        return this.name;
    }

    // method that returns id
    getId() {
        return this.id;
    }

    // method that returns email
    getEmail() {
        return this.email;
    }

    // method that returns role
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;