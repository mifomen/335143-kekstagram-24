// eslint-disable-next-line
import {similarPhotos} from './data/gen-new-photo-posts.js';

// eslint-disable-next-line
// import {renderPicture} from './render/render-picture.js';


// import {similarPhotos} from './data/gen-new-photo-posts.js';

// eslint-disable-next-line
console.log(similarPhotos)
// export const renderPicture = function ()  {

// };

let picturesList = document.querySelector('.pictures');
let pictureTemplate = document.querySelector('#picture');
let pictireFragment = document.createDocumentFragment();
console.log(pictureTemplate)

similarPhotos.forEach((photoPost) => {
  const testPic = pictureTemplate.content.cloneNode(true)
  testPic.querySelector('.picture__img').src = photoPost.url;
  testPic.querySelector('.picture__comments').textContent = photoPost.comments;
  testPic.querySelector('.picture__likes').textContent = photoPost.likes;
console.log(photoPost.url);
  picturesList.appendChild(testPic);
  // testPic.docu photoPost.url =
  console.log(testPic)
})

// task 7.2 module7-task2
// let BigPicture = document.querySelector('.big-picture')

// BigPicture.classList.remove('hidden')

// // import {getRandomArrayElement} from './utils/get-random-array-element.js'
// import {getRandomPositiveInteger} from './utils/get-random-positive-integer.js';


// document.querySelector('.big-picture__img').src=similarPhotos[getRandomPositiveInteger(0,similarPhotos.length)].url;
// // document.querySelector('.big-picture__img').src="mifomen.jps"
// document.querySelector('.likes-count').textContent=similarPhotos[getRandomPositiveInteger(0,similarPhotos.length)].likes;
// console.log(similarPhotos[getRandomPositiveInteger(0,similarPhotos.length)].likes)
// document.querySelector('.comments-count').textContent=similarPhotos[getRandomPositiveInteger(0,similarPhotos.length)].comments;
