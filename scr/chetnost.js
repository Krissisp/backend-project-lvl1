import readlineSync from 'readline-sync';
import { name } from './cli.js';

const chetnost = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const rand = Math.round(Math.random() * Math.random() * 100);
    const otvet = readlineSync.question(`${rand} `);
    if (otvet !== 'yes' && rand % 2 === 0) {
      console.log(`${otvet} is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    if (otvet !== 'no' && rand % 2 > 0) {
      console.log(`${otvet} is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    console.log('Correct!');

    if (i === 3 && ((otvet === 'yes' && rand % 2 === 0) || (otvet === 'no' && rand % 2 > 0))) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default chetnost;
