// GLOBAL VARIABLES
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// THE QUESTIONS
function promptUser() {
  return inquirer.prompt([
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
      type: "list",
      name: "projectLicense",
      message: "Which license would you like to use?",
      choices: ["GNU AGPLv3", "Mozilla Public License 2.0", "MIT", "Unlicensed"]
    },

    {
      type: "confirm",
      name: "projectAllowContribution",
      message: "Would you like to allow contributions?",
      default: false
    },

    {
      type: "input",
      name: "projectTests",
      message: "Explain your testing."
    },

    {
      type: "confirm",
      name: "projectQuestions",
      message: "Would you like to receive questions?",
      default: false
    },
  ]);
}

// RUNS QUESTIONS AND THEN BUILDS THE README
async function init() {

  try {
    const answers = await promptUser();
    console.log(answers)
    const markdown = generateMarkdown(answers);

    await writeFileAsync("readME.md", markdown);

    console.log("Success");
  } catch (err) {
    console.log(err);
  }
}

// RUN ON LOAD
init();