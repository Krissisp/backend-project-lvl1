import readlineSync from 'readline-sync';
import { generGame, getRandom } from './index.js';

const randomazer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const question = 'What number is missing in the progression?';

const game = () => {
  const num1 = getRandom(0, 100);
  const d = getRandom(1, 10);
  const numbers = [num1];
  let numNext = 0;
  for (let i = 1; i <= 10; i += 1) {
    numNext = numbers[i - 1] + d;
    numbers.push(numNext);
  }

  const index = Math.floor(Math.random() * randomazer.length);
  const result = numbers[index];
  numbers[index] = '..';
  const resUser = readlineSync.question(`${numbers} `);
  return [Number(result), Number(resUser)];
};

const progression = () => {
  generGame(question, game);
};

export default progression;
