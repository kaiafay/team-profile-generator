// import team member files
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
// import fs and path modules
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

// empty array for team info to be pushed to
const teamArr = [];

// prompts for initializing creation of team
const createTeam = () => {
    console.log('Please fill in the prompts to build your team.');
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the team manager's name?",
                validate: nameInput => {
                    if(nameInput === '') {
                        console.log("Please enter the manager's name!");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the tean manager's ID number?",
                validate: idInput => {
                    if(idInput === '') {
                        console.log("Please enter the manager's ID number!");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the team manager's email address?",
                validate: emailInput => {
                    if(emailInput === '') {
                        console.log("Please enter the manager's email address!");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "What is the team manager's office number?",
                validate: officeNumberInput => {
                    if(officeNumberInput === '') {
                        console.log("Please enter the manager's office number!");
                        return false;
                    }
                    return true;
                }
            }

        ])
        .then((answers) => {
            // create new manager based off user's answers 
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            // push new manager to teamArr
            teamArr.push(manager);
            // call addTeamMember() function
            addTeamMember();
        });
};

// prompts for adding team members
const addTeamMember = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'memberChoice',
                message: 'Which type of team member would you like to add?',
                choices: ['Engineer', 'Intern', "I do not want to add any more team members."]
            }
        ])
        .then((choice) => {
            switch(choice.memberChoice) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                case 'I do not want to add any more team members.':
                    buildTeam();
                    break;
            }
        });
};

// prompts for adding an engineer 
const addEngineer = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?",
                validate: nameInput => {
                    if(nameInput === '') {
                        console.log("Please enter the engineer's name!");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the engineer's ID number?",
                validate: idInput => {
                    if(idInput === '') {
                        console.log("Please enter the engineer's ID number!");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the engineer's email address?",
                validate: emailInput => {
                    if(emailInput === '') {
                        console.log("Please enter the engineer's email address!");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is the engineer's Github username?",
                validate: githubInput => {
                    if(githubInput === '') {
                        console.log("Please enter the engineer's Github username!");
                        return false;
                    }
                    return true;
                }
            }
        ])
        .then((answers) => {
            // create new engineer based off user's answers
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            // push new engineer to teamArr
            teamArr.push(engineer);
            // call addTeamMember() function
            addTeamMember();
        });
};

// prompts for adding an intern
const addIntern = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?",
                validate: nameInput => {
                    if(nameInput === '') {
                        console.log("Please enter the intern's name!");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is the intern's ID number?",
                validate: idInput => {
                    if(idInput === '') {
                        console.log("Please enter the intern's ID number!");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the intern's email address?",
                validate: emailInput => {
                    if(emailInput === '') {
                        console.log("Please enter the intern's email address!");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What is the intern's school name?",
                validate: schoolInput => {
                    if(schoolInput === '') {
                        console.log("Please enter the intern's school name!");
                        return false;
                    }
                    return true;
                }
            }
        ])
        .then((answers) => {
            // create new intern based off user's answers
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            // push new intern to teamArr
            teamArr.push(intern);
            // call addTeamMember() function
            addTeamMember();
        });
}

// call createTeam() function at start of application
createTeam();

