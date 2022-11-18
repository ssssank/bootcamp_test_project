// @ts-check

import run, { roundsCount } from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'What number is missing in the progression?';

const progressionLength = 8;

const getQuestion = (first, step, hiddenNumberIndex) => {
  const question = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const current = first + i * step;
    const element = i === hiddenNumberIndex ? '..' : String(current);
    question.push(element);
  }

  return question.join(' ');
};

const generateRound = () => {
  const first = generateNumber(1, 10);
  const step = generateNumber(1, 10);
  const hiddenNumberIndex = generateNumber(0, progressionLength - 1);

  const question = getQuestion(first, step, hiddenNumberIndex);
  const answer = String(first + hiddenNumberIndex * step);

  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }

  run(description, rounds);
};
