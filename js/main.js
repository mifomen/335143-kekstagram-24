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
