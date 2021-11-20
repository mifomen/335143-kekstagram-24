const createComments = (commentsArray,count)  =>{
  const commentsList = document.querySelector('.social__comments');
  const commentElement = document.querySelector('.social__comment');
  const commentFragment = document.createDocumentFragment();
  commentsList.innerHTML='';

  const comments = commentsArray.comments.slice(0,count);
  comments.forEach((createComment) => {
    const copyComment = commentElement.cloneNode(true);
    copyComment.querySelector('.social__picture').src = createComment.avatar;
    copyComment.querySelector('.social__picture').alt = createComment.name;
    copyComment.querySelector('.social__text').textContent = createComment.message;

    commentFragment.appendChild(copyComment);
  });
  commentsList.appendChild(commentFragment);

  const imgDescription = document.querySelector('.social__caption');
  const likeCounts =  document.querySelector('.likes-count');
  imgDescription.textContent = commentsArray.description;
  likeCounts.textContent = commentsArray.likes;

};

const body = document.body;
body.classList.add('modal-open');

const bigPicture = document.querySelector('.big-picture');

const onEscapePress = (evt) => {
  if (evt.code === 'Escape' && !bigPicture.classList.contains('hidden')) {
    hidePicture ();
  }
};

function hidePicture() {
  document.querySelector('.big-picture').classList.add('hidden');
  document.querySelector('.big-picture').classList.remove('overlay');
  if (body.classList.contains('modal-open')) {
    body.classList.remove('modal-open');
  }

  document.removeEventListener('keydown', onEscapePress);
}
const onCloseClick = () => {
  hidePicture ();
};

const closePictureButton = document.querySelector('#picture-cancel');
closePictureButton.addEventListener('click', onCloseClick);

document.addEventListener('keydown', onEscapePress);

export {createComments,hidePicture,onEscapePress};
