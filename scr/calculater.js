import readlineSync from 'readline-sync';
import { name } from './cli.js';

const randomOperator = ['+', '-', '*'];

const calculater = () => {
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    const rand = Math.round(Math.random() * Math.random() * 100);
    const rand1 = Math.round(Math.random() * Math.random() * 100);
    const index = Math.floor(Math.random() * randomOperator.length);
    const operator = randomOperator[index];
    const otvet = readlineSync.question(`${rand} ${operator} ${rand1} `);
    let resenie = 0;
    if (operator === '+') {
      resenie = rand1 + rand;
    }
    if (operator === '-') {
      resenie = rand - rand1;
    }
    if (operator === '*') {
      resenie = rand1 * rand;
    }

    if (Number(otvet) !== resenie) {
      console.log(`${otvet} is wrong answer ;(. Correct answer was ${resenie}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    } else {
      console.log('Correct!');
    }

    if (i === 3 && otvet === resenie) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default calculater;
