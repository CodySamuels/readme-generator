// function to generate markdown for README
const generateMarkdown = function generateMarkdown(data) {
  return `# ${data.projectName}
  ### ${data.projectDescription}
  ### ${data.projectName}
  ### ${data.projectTableOfContents}
  ### ${data.projectInstall}
  ### ${data.projectUsage}
  ### ${data.projectLicense}
  ### ${data.projectAllowContribution}
  ### ${data.projectTests}
  ### ${data.projectQuestions}
  ### ${data.gitHubUserName}
`;
}

module.exports = generateMarkdown;
