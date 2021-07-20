import readlineSync from 'readline-sync';
import { generGame, getRandom } from './index.js';

const randomOperator = ['+', '-', '*'];
const question = 'What is the result of the expression?';

const game = () => {
  const num1 = getRandom(1, 10);
  const num2 = getRandom(1, 5);
  const index = Math.floor(Math.random() * randomOperator.length);
  const operator = randomOperator[index];
  const resUser = readlineSync.question(`${num1} ${operator} ${num2} `);
  let result = 0;
  if (operator === '+') {
    result = num1 + num2;
  }
  if (operator === '-') {
    result = num1 - num2;
  }
  if (operator === '*') {
    result = num1 * num2;
  }
  return [Number(result), Number(resUser)];
};

const calculater = () => {
  generGame(question, game);
};

export default calculater;
