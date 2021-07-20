import readlineSync from 'readline-sync';

import { generGame, getRandom } from './index.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const game = () => {
  const num = getRandom(1, 100);
  const resUser = readlineSync.question(`${num} `);
  let result = 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      result = 'no';
    }
  }
  return [result, resUser];
};

const prime = () => {
  generGame(question, game);
};

export default prime;
