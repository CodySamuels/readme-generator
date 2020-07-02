// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 purpose of this project : 
 ### ${data.description}
`;
}

module.exports = generateMarkdown;
