import {createPostPhoto} from './create-post-photo.js';
// import {getRandomPositiveInteger} from './get-random-positive-integer.js';

// let index = 0;
export const getRandomPosts = function(countOfPhotos) {
  return Array.from({length: countOfPhotos}, createPostPhoto);

  // return new Array(countOfPhotos).fill(null).map((item, i) => {
  //   createPostPhoto(i);
  //   // eslint-disable-next-line
  //   console.log(createPostPhoto(i));
  // });
};
