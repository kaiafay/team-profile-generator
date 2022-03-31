const Employee = require('../lib/Employee.js');

test('create employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
});