import './data/gen-new-photo-posts.js';
// import './render/render-picture.js';
import './render/render-random-coments.js';
import './render/render-upload-image.js';
import './utils/scale-post.js';
import './render/render-slider.js';
import {getData} from './utils/api.js';
import  {renderPicture} from './render/render-picture.js';
import  './render/picture.js'
import {renderComments,onEscapePress,hidePicture} from './render/render-random-coments.js';

getData((photoPosts) => {
  renderPicture(photoPosts);
  // renderRandomComments(photoPosts.comments,0)

  const bigPicture = document.querySelector('.big-picture')
  const posts = document.querySelectorAll('.picture__img');
  bigPicture.classList.add('hidden');
  bigPicture.classList.remove('overlay')
  document.body.classList.remove('modal-open');

 let renderCommentsCount = 0;
  for (let post of posts) {
    post.addEventListener('click', function (evt) {
      evt.preventDefault();
      document.addEventListener('keydown', onEscapePress);
      renderCommentsCount = 5;

      bigPicture.querySelector('.big-picture__img img').src = evt.target.src;
      bigPicture.classList.remove('hidden');
      bigPicture.classList.toggle('overlay');
      document.body.classList.toggle('modal-open');

      console.log('evt.target.src',evt.target.src)
      let a = evt.target.src;
      console.log(a)
      if (evt.target.src='photos/1.jpg') {
        console.log('they ===')

      }
    })
  }

  for (let photoPost of photoPosts) {
    // console.log(photoPost)
    renderComments(photoPost,renderCommentsCount);

  }
});

