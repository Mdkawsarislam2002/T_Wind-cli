#!/usr/bin/env node

import inquirer from 'inquirer';
import ForReact from './ProjectBaseSystem/React.js';
import ForVanilla from './ProjectBaseSystem/Vanilla.js';
import { getProjectTypeWithAI } from './utils/utils.js';

async function askQuestion() {
  try {
    const { projectType } = await inquirer.prompt([
      {
        type: 'list',
        name: 'projectType',
        message: 'What kind of project do you want to create?',
        choices: ['vanilla.js', 'react.js'],
        default: getProjectTypeWithAI('./package.json'),
      },
    ]);

    switch (projectType) {
      case 'vanilla.js':
        // ForVanilla();
        ForReact();
        break;

      case 'react.js':
        ForReact();
        break;

      default:
        console.log('Please select a valid option');
    }
  } catch (error) {
    console.log(error);
  }
}

askQuestion();
