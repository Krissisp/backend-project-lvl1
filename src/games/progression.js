import readlineSync from 'readline-sync';
import { generGame, getRandom } from '../cli.js';

const question = 'What number is missing in the progression?';

const game = () => {
  const maxNumbers = getRandom(5, 10);
  const d = getRandom(1, 10);
  const numbers = [getRandom(0, 100)];
  let numNext = 0;
  for (let i = 1; i <= maxNumbers; i += 1) {
    numNext = numbers[i - 1] + d;
    numbers.push(numNext);
  }

  const index = getRandom(0, maxNumbers - 1);
  const result = numbers[index];
  numbers[index] = '..';
  const resUser = readlineSync.question(`${numbers} `);
  return [Number(result), Number(resUser)];
};

const progression = () => {
  generGame(question, game);
};

export default progression;
