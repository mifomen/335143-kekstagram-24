import {createPostPhoto} from './create-post-photo.js';

const getRandomPosts = function (countOfPhotos) {
  return new Array(countOfPhotos).fill(null).map((item,index)=>createPostPhoto(index));
};

// const getRandomPosts = (countOfPhotos) => {
//   new Array(countOfPhotos).fill(null).map = (item,index) => {
//     createPostPhoto(index)
//   }

// }


export {getRandomPosts};
