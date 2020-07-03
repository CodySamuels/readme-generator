// function to generate markdown for README
const generateMarkdown = function generateMarkdown(data) {
  return `# ${projectName}

  ### Description
  ${projectDescription}
  
  ### TABLE OF CONTENTS
  | Syntax | Description |
  | ----------- | ----------- |
  | Header | Title |
  | Paragraph | Text |
  
  ### Installation
  
  ${projectInstall}
  
  ### Usage
  
  ${projectUsage}
  
  ### Tests
  
  ${projectTests}
  
  ### Questions
  
  ${projectQuestions}
  
  ### Contributions
  
  ${projectAllowContribution}
  
  ### License
  
  ${projectLicense}
  
  ### Acknowledgements
  
  ${gitHubUserName}
  
  
`;
}

module.exports = generateMarkdown;
