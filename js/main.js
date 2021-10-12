import {checkStringLength} from './utils/check-string-length.js';
import {getRandomPositiveInteger} from './utils/get-random-positive-integer.js';
import {RANDOM_NAMES,COMMENTS,DESCRIPTIONS,SIMILAR_PHOTOS_COUNT,MIN_LIKES,MAX_LIKES,TEST_STRING,postId} from './data/consts.js';

import {getAvatarImage} from './utils/get-avatar-image.js';
import {getRandomArrayElement} from './utils/get-random-positive-integer.js';
import {getRandomMessages} from './utils/get-random-messages.js';
import {getRandomComments} from './utils/get-random-comments.js';
import {createPostPhoto} from './utils/create-post-photo.js';
import {getRandomPosts} from './utils/get-random-posts.js';



checkStringLength(TEST_STRING, 19);







// eslint-disable-next-line
const similarPhotos = getRandomPosts(SIMILAR_PHOTOS_COUNT);

// eslint-disable-next-line
console.log(similarPhotos)
