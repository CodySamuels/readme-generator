var inquirer = require("inquirer");
var fs = require('fs');

// array of questions for user
const questions = [
    // github username          CHECK
    // * Title                  CHECK
    // * Description            CHECK
    // * Table of Contents      HALF-CHECK
    // * Installation           CHECK
    // * Usage                  CHECK
    // * License                CHECK
    // * Contributing           CHECK   
    // * Tests                  HALF-CHECK
    // * Questions              HALF-CHECK

];

// function to write README file
function writeToFile(fileName, data) {
}



// function to initialize program
function init() {

}

// function call to initialize program
init();


// -------------------------------------------------------------------------------
inquirer.prompt([
  {
    type: "input",
    name: "gitHubUserName",
    message: "What is your GitHub username?"
  },

  {
    type: "input",
    name: "projectName",
    message: "What is the name of the project?"
  },

  {
    type: "input",
    name: "projectDescription",
    message: "How would you describe this project?"
  },

  {
    type: "confirm",
    name: "projectTableOfContents",
    message: "Would you like a table of contents?",
    default: false
  },

  {
    type: "input",
    name: "projectInstall",
    message: "How do you install this project?"
  },

  {
    type: "input",
    name: "projectUsage",
    message: "How do you use this project?"
  },

  {
    type: "checkbox",
    name: "projectLicense",
    message: "Which license would you like to use?",
    choices: [
        "GNU AGPLv3", 
        "Mozilla Public License 2.0", 
        "MIT License", 
        "Unlicensed"
      ]
  },

  {
    type: "confirm",
    name: "projectAllowContribution",
    message: "Would you like to allow contributions?",
    default: false
  },

//   PROBABLY SO WRONG
  {
    type: "input",
    name: "projectTests",
    message: "Explain your testing"
  },

  {
    type: "confirm",
    name: "projectQuestions",
    message: "Would you like to receive questions?",
    default: false
  },






]).then(function(data) {

  var filename = "README.md";

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});