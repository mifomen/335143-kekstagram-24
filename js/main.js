import './data/gen-new-photo-posts.js';
// import './render/render-picture.js';
import './render/render-random-coments.js';
import './render/render-upload-image.js';
import './utils/scale-post.js';
import './render/render-slider.js';
import {getData} from './utils/api.js';
import  {renderPicture} from './render/render-picture.js';
import  './render/picture.js'


import {renderRandomComments} from './render/render-random-coments.js';

getData((photoPosts) => {
  renderPicture(photoPosts);
  renderRandomComments(photoPosts,0);


  console.log(photoPosts)
  const bigPicture = document.querySelector('.big-picture')

  const posts = document.querySelectorAll('.picture__img');
  console.log(posts);

  for (let post of posts) {
    post.addEventListener('click', function (evt) {
      evt.preventDefault();

      console.log(evt.target)
      bigPicture.querySelector('.big-picture__img img').src = evt.target.src;
      bigPicture.classList.remove('hidden');
      bigPicture.classList.toggle('overlay');
      document.body.classList.toggle('modal-open');
    })
  }
});
