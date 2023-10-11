// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project's name?",
        name: "title"
    },
    {
        type: "input",
        message: "Please, insert your project's description:",
        name: "description"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: "license"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        default: "npm i",
        name: "installation"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        default: "npm test",
        name: "test"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('README file was created.')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function (data) {
            writeToFile("README2", data);
        });
}

// Function call to initialize app
init();
