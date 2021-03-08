const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const html = require("./dist/html-factory");
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// async functions
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamData = '';


console.log("---------------------------------");
console.log("Team Profile Generator")
console.log("---------------------------------");

// Inquirer prompts to collect user data
async function prompt() {
    let areYouDone = "";

    do {
        try {
            
            let response = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the employee's name?",
                    validate: function validateName(name) {
                        return name !== "";
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter the employee's ID please: ",
                    validate: function validateName(name) {
                        return name !== "";
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter the employee's email address: ",
                    // validation using email-validator
                    validate: function validateEmail(name){
                        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return re.test(String(name).toLowerCase());
                    }
                },
                {
                    type: "list",
                    name: "role",
                    message: "What is the employee's role: ",
                    choices: [
                        "Manager",
                        "Engineer",
                        "Intern"
                    ]
                }
            ]);

            let response2 = ""

            if (response.role === "Engineer") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "newValue",
                    message: "What is the employee's github username?: ",
                    validate: function validateName(name){
                        return name !== "";
                    },
                }, ]);

                // Append Employee to Team
                const engineer = new Engineer(response.name, response.id, response.email, response2.newValue);
                teamArray.push(engineer);
            
            } else if (response.role === "Manager") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "newValue",
                    message: "What is the employee's office number?: ",
                    validate: function validateName(name){
                        return name !== "";
                    },
                }, ]);

                // Append Employee to Team
                const manager = new Manager(response.name, response.id, response.email, response2.newValue);
                teamArray.push(manager);

            } else if (response.role === "Intern") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "newValue",
                    message: "What school is employee attending: ",
                    validate: function validateName(name){
                        return name !== "";
                    },
                }, ]);

                // Append Employee to Team
                const intern = new Intern(response.name, response.id, response.email, response2.newValue);
                teamArray.push(intern);
            }
        } catch (err) {
            return console.log(err);
        }
        areYouDone = await inquirer.prompt([{
            type: "list",
            name: "finish",
            message: "Do you want to continue? (Yes/No): ",
            choices: [
                "Yes",
                "No"
            ]
        },]);
    } while (areYouDone.finish === "Yes");
}

// init function to run application
async function build() {
    try {
        await prompt()

        for (let i = 0; i < teamArray.length; i++) {
            teamData = teamData + html.cardsTemplate(teamArray[i]);
        }

        let finishedHtml = html.createBaseHtml(teamData)

        
        writeFileAsync("./dist/index.html", finishedHtml);

    } catch (err) {
        return console.log(err);
    }
}
// initial program
build();