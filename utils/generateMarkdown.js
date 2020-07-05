// function to generate markdown for README
const generateMarkdown = function generateMarkdown(data) {

  // VARIABLES
  let tableofContents = ""
  let license = ""
  let contributingText = ""
  let questionText = ""
  let questionInTableofContents = ""

  // ALLOW CONTRIBUTION
  if (data.projectAllowContribution) {
    contributingText = "If you would like to contribute to this repository, please first discuss the changes you would like to make with a developer. You can merge a pull request after the review of at least two developers."
  } else {
    contributingText = "This project isn't currently accepting outside contributions."
  }

  // ACCEPT QUESTIONS AND POST EMAIL
  if (data.projectQuestions) {
    questionInTableofContents = `6. [Questions](#Questions)`
    questionText = `
  ## Questions

    You can ask any questions at twowoodenspoons@gmail.com
    `
  } else {
    questionText = ""
  }

  // FOR THE LICENSE BADGE
  if (data.projectLicense === 'GNU AGPLv3') {
    license = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  } else if (data.projectLicense === 'Mozilla Public License 2.0') {
    license = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (data.projectLicense === 'MIT') {
    license = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (data.projectLicense === 'Unlicensed') {
    license = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }

  // TABLE OF CONTENTS
  if (data.projectTableOfContents) {
    tableofContents = `  

  ## Table of Contents
  
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [Tests](#Tests)
  4. [Contributing](#Contributing)
  5. [Acknowledgements](#Acknowledgements)
  ${questionInTableofContents}

  `
  }

  // BODY OF README
  return `
  # ${data.projectName} ${license} 

  ## Description
    ${data.projectDescription}
  
  ${tableofContents}

  ## Installation
  
    ${data.projectInstall}
  
  ## Usage
  
    ${data.projectUsage}
  
  ## Tests
  
    ${data.projectTests}
  
  ## Contributing
  
    ${contributingText}
  
  ## Acknowledgements
  
  [${data.gitHubUserName}](https://www.github.com/${data.gitHubUserName}), the author.

  ${questionText}

`
}

// EXPORT FOR USE
module.exports = generateMarkdown;