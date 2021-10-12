import {getRandomPosts} from '../utils/get-random-posts.js';
import {SIMILAR_PHOTOS_COUNT} from './consts.js';

const similarPhotos = getRandomPosts(SIMILAR_PHOTOS_COUNT);

export {similarPhotos};

