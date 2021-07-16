import readlineSync from 'readline-sync';
import { name } from './cli.js';

const gcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= 3; i += 1) {
    const rand = Math.round(Math.random() * Math.random() * 100);
    const rand1 = Math.round(Math.random() * Math.random() * 100);
    const otvet = readlineSync.question(`${rand} ${rand1} `);
    let rehenie = 1;
    if (rand % rand1 === 0 || rand1 % rand === 0) {
      rehenie = Math.min(rand, rand1);
    } else {
      for (let del = 1; del <= Math.min(rand, rand1); del += 1) {
        if (rand1 % del === 0 && rand % del === 0) {
          rehenie = del;
        }
      }
    }
    if (Number(otvet) !== rehenie) {
      console.log(`'${otvet}' is wrong answer ;(. Correct answer was ${rehenie}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    } else {
      console.log('Correct!');
    }
    if (i === 3 && Number(otvet) === rehenie) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default gcd;
