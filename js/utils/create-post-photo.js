import {RANDOM_NAMES,COMMENTS,DESCRIPTIONS,MIN_LIKES,MAX_LIKES} from '../data/consts.js';

// import {postId} from '../data/consts.js';
import {getAvatarImage} from './get-avatar-image.js';
import {getRandomArrayElement} from './get-random-array-element.js';
import {getRandomPositiveInteger} from './get-random-positive-integer.js';
import {getRandomComments} from './get-random-comments.js';
// let index = 0;

export function createPostPhoto(countOfPhotos) {
  return {
    // id: index++,

    id: new Array(countOfPhotos).fill(null).map((item, i) => {createPostPhoto(i);}),
    url: getAvatarImage(),
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(MIN_LIKES,MAX_LIKES),
    comments: getRandomComments(COMMENTS),
    name: getRandomArrayElement(RANDOM_NAMES),
  };
}
