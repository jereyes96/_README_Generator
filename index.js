// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Please enter project name.",
        name: "title"
    },

    {
        type: 'list',
        message: "What file format do you want for your readme?",
        name: "fileType",
        choices: [".txt", ".md"]
    },

    {
        type: 'input',
        message: "please enter a description of project?",
        name: "description"
    },

    {
        type: 'input',
        message: "Installation: How do you install your application?",
        name: "installation"
    },

    {
        type: 'input',
        message: "Instructions",
        name: "instructions"
    },

    {
        type: 'input',
        message: "Contribution Guidelines",
        name: "contribution"
    },


];

function init() {
    inquirer.prompt(questions).then((response) => {
        fs.writeFile('README.md', generateMd(response), (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    });
}

init();
