/* eslint-disable */

import readlineSync from 'readline-sync';

function getRandomPositiveInteger(a, b)
{
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
}

let array = [];
let hideNumber;
const description = 'What number is missing in the progression?';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log(description);

function getRandomArray() {
    let progressionCount = getRandomPositiveInteger(1, 6);

    array = Array.from({ length: getRandomPositiveInteger(5, 12) }).fill(0);
    array[0] = getRandomPositiveInteger(1, 15);

    for (let i = 1; i < array.length; i++) {
        array[i] = array[i - 1] + progressionCount;
    }
    return array;
}

function hideRandomElement(inputArray) {
    let randomIndex = getRandomPositiveInteger(0, inputArray.length - 1);
    hideNumber = inputArray[randomIndex];
    inputArray[randomIndex] = "..";
};

function startGameSession() {

    let counter = 0;
    getRandomArray();
    hideRandomElement(array);

    do {
        console.log(`Question: ${array}`);
        let answer = readlineSync.question('Your answer: ');
        if (+answer === hideNumber) {
            console.log("Correct!");
            counter++;
            getRandomArray();
            hideRandomElement(array);
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hideNumber}'.
      Let's try again, ${name}`);
            counter = 0;
            getRandomArray();
            hideRandomElement(array);
        }
    } while (counter < 3)
    console.log(`Congratulations, ${name}!`)
}

export {startGameSession};
