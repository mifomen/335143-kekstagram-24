import './data/gen-new-photo-posts.js';
// import './render/render-picture.js';
import './render/render-random-coments.js';
import './render/render-upload-image.js';
import './utils/scale-post.js';
import './render/render-slider.js';
import {getData} from './utils/api.js';
import  {renderPicture} from './render/render-picture.js';
import  './render/picture.js';
import {renderComments,onEscapePress} from './render/render-random-coments.js';

getData((photoPosts) => {
  renderPicture(photoPosts);
  const bigPicture = document.querySelector('.big-picture');
  const posts = document.querySelectorAll('.picture__img');
  bigPicture.classList.add('hidden');
  bigPicture.classList.remove('overlay');
  document.body.classList.remove('modal-open');

  for (const post of posts) {
    post.addEventListener('click', (evt) => {

      evt.preventDefault();
      bigPicture.querySelector('.big-picture__img img').src = evt.target.src;
      bigPicture.classList.remove('hidden');
      bigPicture.classList.toggle('overlay');
      document.body.classList.toggle('modal-open');
      document.addEventListener('keydown', onEscapePress);
      let renderCommentsCount = 5;
      let obj;
      const condition = evt.target.dataset.id;

      photoPosts.forEach((item) => {
        if (item.id.toString() === condition) {
          obj = item;}
      });

      renderComments(obj,renderCommentsCount);
      const commentsLoadBtn = document.querySelector('.social__comment-count');
      const loadCommentsBtn = document.querySelector('.comments-loader');
      loadCommentsBtn.addEventListener('click', () => {

        renderCommentsCount+=5;
        if (renderCommentsCount <= obj.comments.length) {
          commentsLoadBtn.textContent=`${renderCommentsCount} из ${obj.comments.length}`;
          renderComments(obj,renderCommentsCount);
          loadCommentsBtn.classList.remove('hidden');
        } else {
          loadCommentsBtn.classList.add('hidden');
          commentsLoadBtn.textContent=`${obj.comments.length} из ${obj.comments.length}`;
        }
      });

      if (renderCommentsCount <= obj.comments.length ) {
        commentsLoadBtn.textContent=`${renderCommentsCount} из ${obj.comments.length}`;
        loadCommentsBtn.classList.remove('hidden');
      } else {
        commentsLoadBtn.textContent=`${obj.comments.length} из ${obj.comments.length}`;
        loadCommentsBtn.classList.add('hidden');
      }

    });
  }

  // for (let photoPost of photoPosts) {
  //   // console.log(photoPost)
  //   console.log(renderCommentsCount)
  //   renderComments(photoPost,renderCommentsCount);

  // }
});

