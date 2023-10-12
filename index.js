// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project's name?",
        name: "title",
        validate: (title) => {
            if (!title) {
                return 'Please provide a project name';
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Please write a short description of your project:",
        name: "description",
        validate: (description) => {
            if (!description) {
                return 'Please provide a description';
            }
            return true;
        }
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
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage",
        validate: (usage) => {
            if (!usage) {
                return 'Please providei nformation about using the repo';
            }
            return true;
        }
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing",
        validate: (contributing) => {
            if (!contributing) {
                return 'Please provide information about contributing to the repo';
            }
            return true;
        }
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
        validate: (github) => {
            if (!github) {
                return 'Please provide your GitHub username';
            }
            return true;
        }
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
