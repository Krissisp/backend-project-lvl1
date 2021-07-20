import readlineSync from 'readline-sync';

import { generGame, getRandom } from '../index.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';
const game = () => {
  const num = getRandom(1, 100);
  const resUser = readlineSync.question(`${num} `);
  let result = 'no';
  if (num % 2 === 0) {
    result = 'yes';
  }
  return [result, resUser];
};

const even = () => {
  generGame(question, game);
};

export default even;
