import readlineSync from 'readline-sync';


export var name = readlineSync.question('May I have your name? ');
export const hey = (name) => {
console.log('Hello,' + name + '!')
}