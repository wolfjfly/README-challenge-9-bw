
function generateMarkdown(data) {
  return `
  
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
  

  ## Usage
  ${data.usage}
  

  ## Contributing
  ${data.contribution}
  

  ## Credits
  ${data.credits}

  ## Tests
  ${data.test}
  

  ## License
  Copycenter (c) [${data.username}](https://github.com/${data.username}). All centers reserved. 
  \nLicensed under the [${data.license} license](https://choosealicense.com/licenses/${data.license.toLowerCase()}/)
  

  ## Questions
  Feel free to contact me with questions or comments @:
  - GitHub: [${data.username}](https://github.com/${data.username})
  - Email: [${data.email}](mailto:${data.email})
  
  `;
  
}

module.exports = generateMarkdown;
