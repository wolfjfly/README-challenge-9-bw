// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

// ![GitHub](https://img.shields.io/github/license/wolfjfly/challenge-9-bw?style=plastic)

function generateMarkdown(data) {
  return `# ${data.title}
  
  # ${data.title}

  ## Description
  ${data.description}

  [![License Badge](https://img.shields.io/badge/license-${data.license}-success?style=plastic)](https://choosealicense.com/licenses/${data.license.toLowerCase()}/)
  
  
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Credits](#credits)
  5. [Tests](#tests)
  6. [License](#license)
  7. [Questions](#questions)
  
  ## Installation
  ${data.installation}
  <p align="right">(<a href="#readme-top">back to top</a>)</p>

  ## Usage
  ${data.usage}
  <p align="right">(<a href="#readme-top">back to top</a>)</p>

  ## Contributing
  ${data.contributing}
  <p align="right">(<a href="#readme-top">back to top</a>)</p>

  ## Tests
  ${data.tests}
  <p align="right">(<a href="#readme-top">back to top</a>)</p>

  ## License
  Copyright (c) [${data.username}](https://github.com/${data.username}). All rights reserved. 
  \nLicensed under the [${data.license} license](https://choosealicense.com/licenses/${data.license.toLowerCase()}/)
  <p align="right">(<a href="#readme-top">back to top</a>)</p>

  ## Questions
  Feel free to contact me with questions or comments @:
  - GitHub: [${data.username}](https://github.com/${data.username})
  - Email: [${data.email}](mailto:${data.email})
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  `;
  
}

module.exports = generateMarkdown;
