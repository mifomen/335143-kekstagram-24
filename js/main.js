import {similarPhotos} from './data/gen-new-photo-posts.js';

// eslint-disable-next-line
import {renderPicture} from './render/render-picture.js';

// eslint-disable-next-line
console.log(similarPhotos)


// const picturesList = document.querySelector('.pictures');
// const pictureTemplate = document.querySelector('#picture');
// const pictureFragment = document.createDocumentFragment();

// similarPhotos.forEach((photoPost) => {
// const photoElement = pictureTemplate.content.cloneNode(true);
// photoElement.querySelector('.picture__img').src = photoPost.url;
// photoElement.querySelector('.picture__comments').textContent = photoPost.length;
// photoElement.querySelector('.picture__likes').textContent = photoPost.likes;
// pictureFragment.appendChild(photoElement);

// });
// picturesList.appendChild(pictureFragment)


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
