// function to generate markdown for README
const generateMarkdown = function generateMarkdown(data) {
  var tableofContents = ""
  // LICENSE
  // ALLOW CONTRIBUTION
  // ACCEPT QUESTIONS

  // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  // [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
  // [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
  // [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)







  if (data.projectTableOfContents) {
    tableofContents = `  ### TABLE OF CONTENTS
    | Syntax | Description |
    | ----------- | ----------- |
    | Header | Title |
    | Paragraph | Text |

     `
  }
  return `
  # ${data.projectName}

  ### Description
  ${data.projectDescription}
  
  ${tableofContents}
  ### Installation
  
  ${data.projectInstall}
  
  ### Usage
  
  ${data.projectUsage}
  
  ### Tests
  
  ${data.projectTests}
  
  ### Questions
  
  ${data.projectQuestions}
  
  ### Contributions
  
  ${data.projectAllowContribution}
  
  ### License
  
  ${data.projectLicense}
  
  ### Acknowledgements
  
  ${data.gitHubUserName}
   
`
}

module.exports = generateMarkdown;
