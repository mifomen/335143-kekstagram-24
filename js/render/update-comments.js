import {createComments,onEscapePress} from './create-comments.js';

const COMMENTS_STEP = 5;

const updateComments = (dataArray) => {

  const bigPicture = document.querySelector('.big-picture');
  const allPosts = document.querySelectorAll('.picture__img');
  bigPicture.classList.add('hidden');
  bigPicture.classList.remove('overlay');
  document.body.classList.remove('modal-open');

  for (const onPostClick of allPosts) {
    onPostClick.addEventListener('click', (evt) => {

      evt.preventDefault();
      bigPicture.querySelector('.big-picture__img img').src = evt.target.src;
      bigPicture.classList.remove('hidden');
      bigPicture.classList.toggle('overlay');
      document.body.classList.toggle('modal-open');
      document.addEventListener('keydown', onEscapePress);
      let renderCommentsCount = COMMENTS_STEP;
      let obj;
      const condition = evt.target.dataset.id;

      dataArray.forEach((item) => {
        if (item.id.toString() === condition) {
          obj = item;}
      });

      createComments(obj,renderCommentsCount);
      const commentsLoadBtn = document.querySelector('.social__comment-count');
      const loadCommentsBtn = document.querySelector('.comments-loader');

      loadCommentsBtn.addEventListener('click', () => {
        renderCommentsCount+=COMMENTS_STEP;

        if (obj.comments.length - renderCommentsCount < COMMENTS_STEP) {
          commentsLoadBtn.textContent=`${obj.comments.length} из ${obj.comments.length}`;
          createComments(obj,obj.comments.length);
          loadCommentsBtn.classList.add('hidden');
          return;
        }
        if (renderCommentsCount <= obj.comments.length) {
          commentsLoadBtn.textContent=`${renderCommentsCount} из ${obj.comments.length}`;
          createComments(obj,renderCommentsCount);
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
};

export {updateComments};
