const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./template.js'); 
const generateMarkdown = require('./generateMarkdown.js');

function init() {
  console.log("Welcome to readme Generator !!!")

  inquirer.prompt([
    {
      type: 'input',
      message: 'Please enter the name of your project',
      name: 'title'
    },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project',
      name: 'description'
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project ? ',
      name: 'installation',
      default: 'npm install'

    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use.Include screenshots as needed.',
      name: 'Usage',
      default: '![alt text](assets/images/screenshot.png)'

    },
    {
      type: 'input',
      message: 'List your collaborators, if any',
      name: 'Credits'
    },
    {
      type: 'list',
      message: 'Please select a license for your project',
      name: 'license',
      choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" license', 'BSD 3-Clause "New" or "Revised" license', 'Boost Software License 1.0']

    },
    {
      type: 'input',
      message: 'Provide features for your project.',
      name: 'features'

    },
    {
      type: 'input',
      message: 'Please provide the examples on how to run the test ',
      name: 'test',
      default: 'npm run tests'

    }
  ])
    .then((response) => {

      console.log('Success!', response);
      //converting object into string using template 
      const data = template({...response}); 
      console.log(data);
      //create a readme file based on the answwewrs 
      fs.writeFile('README.md', data, function (err) {
        if (err) throw err;
        console.log('Generated README.md successfully!');
      });

    }
    );
}

init();