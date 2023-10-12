// generate license badge image or empty string if no license is selected
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "APACHE 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    default:
      return "";
  }
}

// if no license is selected do not add license link
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else {
    return "- [License](#license)";
  }
}

// if no license is selected do not add license section
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `## License
This project is licensed under the ${license} license.`;
  }
}

// README markdown content
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
To install necessary dependecies, run the following command:

\`\`\`
${data.installation}
\`\`\`
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributing
${data.contributing}
## Tests
To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`
## Questions
If you have any questions about the repo, open an issue or contact me directly at 
[${data.email}](mailto:${data.email}). You can find more of my work at [${data.github}](https://www.github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
