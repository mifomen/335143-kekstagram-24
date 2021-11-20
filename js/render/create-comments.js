const createComments = (commentsArray,count)  =>{
  const commentsListElement = document.querySelector('.social__comments');
  const commentElement = document.querySelector('.social__comment');
  const commentFragment = document.createDocumentFragment();
  commentsListElement.innerHTML='';

  const comments = commentsArray.comments.slice(0,count);
  comments.forEach((createComment) => {
    const copyCommentElement = commentElement.cloneNode(true);
    copyCommentElement.querySelector('.social__picture').src = createComment.avatar;
    copyCommentElement.querySelector('.social__picture').alt = createComment.name;
    copyCommentElement.querySelector('.social__text').textContent = createComment.message;

    commentFragment.appendChild(copyCommentElement);
  });
  commentsListElement.appendChild(commentFragment);

  const imgDescriptionElement = document.querySelector('.social__caption');
  const likesCountElement =  document.querySelector('.likes-count');

  imgDescriptionElement.textContent = commentsArray.description;
  likesCountElement.textContent = commentsArray.likes;

};

const body = document.body;
body.classList.add('modal-open');

const bigPictureElement = document.querySelector('.big-picture');

const onEscapePress = (evt) => {
  if (evt.code === 'Escape' && !bigPictureElement.classList.contains('hidden')) {
    hidePictureOverlay ();
  }
};

function hidePictureOverlay() {
  document.querySelector('.big-picture').classList.add('hidden');
  document.querySelector('.big-picture').classList.remove('overlay');
  if (body.classList.contains('modal-open')) {
    body.classList.remove('modal-open');
  }

  document.removeEventListener('keydown', onEscapePress);
}
const onCloseOverlayBtnClick = () => {
  hidePictureOverlay ();
};

const closePictureButtonElement = document.querySelector('#picture-cancel');
closePictureButtonElement.addEventListener('click', onCloseOverlayBtnClick);

document.addEventListener('keydown', onEscapePress);

export {createComments,onEscapePress};
