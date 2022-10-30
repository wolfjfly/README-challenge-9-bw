// TODO: Include packages needed for this application
const inquirer=require('inquirer');
const fs=require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'What is the title of your project:',
        name:'title',
    },
    {
        type:'input',
        message:'Provide a short description explaining the what, why, and how of your project:',
        name:'description',
    },
    {
        type:'input',
        message:'What are the steps required to install your project:',
        name:'installation',
    },
    {
        type:'input',
        message:'Provide instructions on how to use this:',
        name:'usage',
    },
    {
        type:'input',
        message:'Provide instructions on how to contribute to your application:',
        name:'contribution',
    },
    {
        type:'input',
        message:'List your collaborators, third-party assests, and tutorials that require attribution:',
        name:'credits',
    },
    {
        type:'Input',
        message:'How to test your project:',
        name:'test',
    },
    {
        type:'list',
        message:'Which license would you like to apply:',
        name:'license',
        default:'MIT',
        choices:[
            "Apache",
            "MIT",
            "BSD",
            "Unlicensed",
            "none",
        ],
    },
    {
        type:'input',
        message:'Add your GitHub username',
        name:'username',
    },
    {
        type:'input',
        message:"Add your contact email address",
        name:'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('README file has been succesfully generated 🎆'));
    console.log(data);
}

// TODO: Create a function to initialize app
function init() {
    return inquirer
        .prompt(questions)
        .then((answer)=>{
            const markDown=generateMarkdown(answer);
            fs.writeFile('GENREADME.md', markDown, (err)=>
            err ? console.log(err) : console.log('README file has been succesfully generated 🎆')
            );
    })
        // .catch((err)=>{
        // err ? console.error(err) : console.log('README file has been succesfully generated 🎆');
        // });
        
}

// Function call to initialize app
init();