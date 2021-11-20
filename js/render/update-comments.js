import {createComments,onEscapePress} from './create-comments.js';

const COMMENTS_STEP = 5;

const updateComments = (dataArray) => {

  const bigPictureElement = document.querySelector('.big-picture');
  const postsElements = document.querySelectorAll('.picture__img');
  bigPictureElement.classList.add('hidden');
  bigPictureElement.classList.remove('overlay');
  document.body.classList.remove('modal-open');

  for (const postElement of postsElements) {
    postElement.addEventListener('click', (evt) => {

      evt.preventDefault();
      bigPictureElement.querySelector('.big-picture__img img').src = evt.target.src;
      bigPictureElement.classList.remove('hidden');
      bigPictureElement.classList.toggle('overlay');
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
      const commentsLoadBtnElement = document.querySelector('.social__comment-count');
      const loadCommentsBtnElement = document.querySelector('.comments-loader');

      loadCommentsBtnElement.addEventListener('click', () => {
        renderCommentsCount+=COMMENTS_STEP;

        if (obj.comments.length - renderCommentsCount < COMMENTS_STEP) {
          commentsLoadBtnElement.textContent=`${obj.comments.length} из ${obj.comments.length}`;
          createComments(obj,obj.comments.length);
          loadCommentsBtnElement.classList.add('hidden');
          return;
        }
        if (renderCommentsCount <= obj.comments.length) {
          commentsLoadBtnElement.textContent=`${renderCommentsCount} из ${obj.comments.length}`;
          createComments(obj,renderCommentsCount);
          loadCommentsBtnElement.classList.remove('hidden');
        } else {
          loadCommentsBtnElement.classList.add('hidden');
          commentsLoadBtnElement.textContent=`${obj.comments.length} из ${obj.comments.length}`;
        }
      });

      if (renderCommentsCount <= obj.comments.length ) {
        commentsLoadBtnElement.textContent=`${renderCommentsCount} из ${obj.comments.length}`;
        loadCommentsBtnElement.classList.remove('hidden');
      } else {
        commentsLoadBtnElement.textContent=`${obj.comments.length} из ${obj.comments.length}`;
        loadCommentsBtnElement.classList.add('hidden');
      }
    });
  }
};

export {updateComments};
