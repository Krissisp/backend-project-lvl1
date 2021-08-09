import readlineSync from 'readline-sync';
import { generGame, getRandom } from '../cli.js';

const randomOperator = ['+', '-', '*'];
const question = 'What is the result of the expression?';

const game = () => {
  const num1 = getRandom(1, 10);
  const num2 = getRandom(1, 5);
  const operator = randomOperator[getRandom(0,2)];
  const resUser = readlineSync.question(`Question: ${num1} ${operator} ${num2} `);
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
