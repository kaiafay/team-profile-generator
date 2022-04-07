// function that generates html page
const generatePage = team => {
    // function that creates manager card
    const managerCard = manager => {
        return `
        <div class="card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // function that creates engineer card
    const engineerCard = engineer => {
        return `
        <div class="card">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
        `;
    };

    // function that creates intern card
    const internCard = intern => {
        return `
        <div class="card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // emtpy array for employee cards
    const html = [];

    // push employee cards to html array
    html.push(team
        // filters through team array for manager(s)
        .filter(employee => employee.getRole() === "Manager")
        // calls managerCard() function on each manager
        .map(manager => managerCard(manager)));
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => engineerCard(engineer))
        // joins all the elements in the array and returns it as a string
        .join(""));
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => internCard(intern))
        .join(""));

        // returns html array as a joined string
        return html.join("");
};