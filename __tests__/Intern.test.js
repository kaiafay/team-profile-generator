const Intern = require('../lib/Intern.js');

test('set school', () => {
    const school = 'school';
    // placeholder for name, id, and email
    const intern = new Intern('Foo', 1, 'email@email.com', school);

    expect(intern.school).toBe(school);
});

// make sure getSchool() method returns intern school
test("get intern's school", () => {
    const school = 'school';
    const intern = new Intern('Foo', 1, 'email@email.com', school);

    expect(intern.getSchool()).toBe(school);
});

// make sure getRole() method returns intern role
test("get intern's role", () => {
    const role = 'Intern'
    const intern = new Intern('Foo', 1, 'email@email.com', 'school');

    expect(intern.getRole()).toBe(role);
});