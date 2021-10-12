import {RANDOM_NAMES,COMMENTS} from '../data/consts.js';
import {getRandomPositiveInteger} from './get-random-positive-integer.js';
import {getAvatarImage} from './get-avatar-image.js';
import {getRandomMessages} from './get-random-messages.js';
import {getRandomArrayElement} from './get-random-array-element.js';

export function getRandomComments() {
  return {
    id: getRandomPositiveInteger(1,800),
    avatar: getAvatarImage(),
    message: getRandomMessages(COMMENTS),
    name: getRandomArrayElement(RANDOM_NAMES),
  };
}
