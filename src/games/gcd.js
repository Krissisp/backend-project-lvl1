import readlineSync from 'readline-sync';
import { getRandom, generGame } from '../cli.js';

const question = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 70);
  const resUser = readlineSync.question(`${num1} ${num2} `);
  let result = 1;
  if (num1 % num2 === 0 || num2 % num1 === 0) {
    result = Math.min(num1, num2);
  } else {
    for (let del = 1; del <= Math.min(num1, num2); del += 1) {
      if (num2 % del === 0 && num1 % del === 0) {
        result = del;
      }
    }
  }
  return [Number(result), Number(resUser)];
};

const gcd = () => {
  generGame(question, game);
};

export default gcd;
