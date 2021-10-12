import {getRandomPosts} from '../utils/get-random-posts.js'
import {SIMILAR_PHOTOS_COUNT} from './consts.js';
// eslint-disable-next-line
const similarPhotos = getRandomPosts(SIMILAR_PHOTOS_COUNT);

// eslint-disable-next-line
console.log(similarPhotos)

export {similarPhotos}
