// TODO: Include packages needed for this application
const inquirer=require('inquirer');
const fs=require('fs');
const generateMarkdown=require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'What is the title of your project?',
        name:'title',
    },

    {
        type:'input',
        message:'Provide a short description explaining the what, why, and how of your project.',
        name:'description',
    },

    {
        type:'input',
        message:'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name:'installation',
    },

    {
        type:'input',
        message:'Provide instructions and examples for use. Include screenshots as needed.',
        name:'usage',
    },

    {
        type:'input',
        message:'Provide instructions on how to contribute to your application',
        name:'contribution',
    },

    {
        type:'input',
        message:'List your collaborators, third-party assests, and tutorials that require attribution.',
        name:'credits',
    },

    {
        type:'Input',
        message:'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
        name:'test',
    },

    {
        type:'list',
        message:'Which license would you like to apply?',
        name:'License',
        choices:['afl-3.0','apache-2.0', 'artistic-2.0','bsl-1.0','bsd-2-clause','bsd-3-clause','bsd-3-clause-clear','cc','cc0-1.0','cc-by-4.0','cc-by-sa-4.0','wtfpl','ecl-2.0','epl-1.0','epl-2.0','eupl-1.1','agpl-3.0','gpl','gpl-2.0','gpl-3.0','lgpl','lgpl-2.1','lgpl-3.0','isc','lppl-1.3c','ms-pl','mit','mpl-2.0','osl-3.0','postgresql','ofl-1.1','ncsa','unlicense','zlib',],
    },

    {
        type:'input',
        message:'Add your GitHub username',
        name:'username',
    },

    {
        type:'input',
        message:'Add your contact email address',
        name:'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync('GENREADME.md', data, (err) =>
    err ? console.error(err) : console.log('README file has been succesfully generated 🎆'))
}

// TODO: Create a function to initialize app
function init() {inquirer
.createPromptModule(questions)
.then((response) => writeToFile(generateMarkdown(response)));
}

// Function call to initialize app
init();