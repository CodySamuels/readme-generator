const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require('fs');

// array of questions for user
const questions = [
  {
    type: "input",
    name: "gitHubUserName",
    message: "What is your GitHub username?"
  },

  // {
  //   type: "input",
  //   name: "projectName",
  //   message: "What is the name of the project?"
  // },

  // {
  //   type: "input",
  //   name: "projectDescription",
  //   message: "How would you describe this project?"
  // },

  // {
  //   type: "confirm",
  //   name: "projectTableOfContents",
  //   message: "Would you like a table of contents?",
  //   default: false
  // },

  // {
  //   type: "input",
  //   name: "projectInstall",
  //   message: "How do you install this project?"
  // },

  // {
  //   type: "input",
  //   name: "projectUsage",
  //   message: "How do you use this project?"
  // },

  // {
  //   type: "checkbox",
  //   name: "projectLicense",
  //   message: "Which license would you like to use?",
  //   choices: [
  //     "GNU AGPLv3",
  //     "Mozilla Public License 2.0",
  //     "MIT License",
  //     "Unlicensed"
  //   ]
  // },

  // {
  //   type: "confirm",
  //   name: "projectAllowContribution",
  //   message: "Would you like to allow contributions?",
  //   default: false
  // },

  // What would the test command be? "npm test"
  // {
  //   type: "input",
  //   name: "projectTests",
  //   message: "Explain your testing"
  // },

  // {
  //   type: "confirm",
  //   name: "projectQuestions",
  //   message: "Would you like to receive questions?",
  //   default: false
  // },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {

    if (err) throw err;
    console.log("Success");
  })
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then(response => (writeToFile("readME.mD", generateMarkdown(response))))
}

// function call to initialize program
init();