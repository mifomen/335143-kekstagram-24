import {getRandomPositiveInteger} from './get-random-positive-integer.js';

export function getRandomArrayElement(elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}
