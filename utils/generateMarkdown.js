// function to generate markdown for README
const generateMarkdown = function generateMarkdown(data) {
  let tableofContents = ""
  let license = ""

  // ALLOW CONTRIBUTION
  // ACCEPT QUESTIONS

  if (data.projectLicense === 'GNU AGPLv3') {
    license = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  } 

  if (data.projectLicense === 'Mozilla Public License 2.0') {
    license = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }

  if (data.projectLicense === 'MIT') {
    license = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }

  if (data.projectLicense === 'Unlicensed') {
    license = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }

  if (data.projectTableOfContents) {
    tableofContents = `  

  ## Table of Contents
  
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [Tests](#Tests)
  4. [Contributing](#Contributing)
  5. [Acknowledgements](#Acknowledgements)
  6. [Questions](#Questions)

  `
  }
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
  
    ${data.projectAllowContribution}
  
  ## Acknowledgements
  
  [${data.gitHubUserName}](https://www.github.com/${data.gitHubUserName}) the author.

  ## Questions
  
    ${data.projectQuestions}

`
}

module.exports = generateMarkdown;
