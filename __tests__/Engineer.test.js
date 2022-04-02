const Engineer = require('../lib/Engineer.js');

test('set github username', () => {
    const github = 'githubname';
    // placeholder values for name, id, and email
    const engineer = new Engineer('Foo', 1, 'email@email.com', github);

    expect(engineer.github).toBe(github);
});

// make sure getGithub() method returns engineer github
test("get engineer's github username", () => {
    const github = 'githubname'
    const engineer = new Engineer('Foo', 1, 'email@email.com', github);

    expect(engineer.getGithub()).toBe(github);
});

// make sure getRole() method returns engineer role
test("get engineer's role", () => {
    const role = 'Engineer';
    const engineer = new Engineer('Foo', 1, 'email@email.com', 'githubname');

    expect(engineer.getRole()).toBe(role);
});