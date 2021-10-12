import {createPostPhoto} from './create-post-photo.js';

export const getRandomPosts = function(countOfPhotos) {
  return Array.from({length: countOfPhotos}, createPostPhoto);
};
