import {getRandomPositiveInteger} from './get-random-positive-integer.js';

export function getAvatarImage() {
  return `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`;
}
