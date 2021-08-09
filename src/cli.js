import readlineSync from 'readline-sync';

export const getRandom = (min, max) => {
  const rand = Math.round(Math.random() * Math.random() * (max - min) + min);
  return rand;
};

const maxFor = 3;

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello,${name}!`);
};

export const generGame = (question, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello,${name}!`);
  console.log(question);
  for (let i = 1; i <= maxFor; i += 1) {
    const [result, resUser] = game();
    if (resUser !== result) {
      console.log(`${resUser} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    } else {
      console.log('Correct!');
    }

    if (i === maxFor && resUser === result) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
