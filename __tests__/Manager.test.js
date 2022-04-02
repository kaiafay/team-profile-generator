const Manager = require('../lib/Manager.js');

test('set office number', () => {
    const officeNumber = 100;
    const manager = new Manager('Foo', 1, 'email@email.com', officeNumber);

    expect(manager.officeNumber).toBe(officeNumber);
});

// make sure getOfficeNumber() method returns manager office number
test("get manager's office number", () => {
    const officeNumber = 100;
    const manager = new Manager('Foo', 1, 'email@email.com', officeNumber);

    expect(manager.getOfficeNumber()).toBe(officeNumber);
});

// make sure getRole() method returns manager role
test("get manager's role", () => {
    const role = 'Manager';
    const manager = new Manager('Foo', 1, 'email@email.com', 100);

    expect(manager.getRole()).toBe(role);
});