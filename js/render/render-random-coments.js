import {getRandomArrayElement} from '../utils/get-random-array-element.js';
import {DESCRIPTIONS,MIN_LIKES,MAX_LIKES,POSTS_COUNT} from '../data/consts.js';
import {getRandomPositiveInteger} from '../utils/get-random-positive-integer.js';
import {getRandomComments} from '../utils/get-random-comments.js';

const randomComments = new Array(getRandomPositiveInteger(1,25)).fill(null).map((item,index)=>getRandomComments(index));

export const renderRandomComments = function ()  {
  const commentsList = document.querySelector('.social__comments');
  const commentElement = document.querySelector('.social__comment');
  const commentFragment = document.createDocumentFragment();
  commentsList.innerHTML='';

  randomComments.forEach((randomComment) => {
    const copyComment = commentElement.cloneNode(true);
    copyComment.querySelector('.social__picture').src=randomComment.avatar;
    copyComment.querySelector('.social__picture').alt=randomComment.name;
    copyComment.querySelector('.social__text').textContent=randomComment.message;
    commentFragment.appendChild(copyComment);
  });
  commentsList.appendChild(commentFragment);
};

renderRandomComments();

const likesCount = document.querySelector('.likes-count');
likesCount.textContent = getRandomPositiveInteger(MIN_LIKES,MAX_LIKES);

const commentCount = document.querySelector('.social__comment-count');
if (5 >= randomComments.length) {
  commentCount.textContent=`${randomComments.length} из ${randomComments.length}`;
}

const comments = document.querySelector('.comments-count');
comments.textContent = randomComments.length;

const imgDescription = document.querySelector('.social__caption');
imgDescription.textContent= getRandomArrayElement(DESCRIPTIONS);

const commentsLoader = document.querySelector('.comments-loader');
commentsLoader.classList.add('hidden');

export const body = document.body;
body.classList.add('modal-open');

const bigPicture = document.querySelector('.big-picture');

const openPost = function(item) {
  item.classList.remove('hidden');
};
openPost(bigPicture);

const onEscapePress = () => {
  if (event.code === 'Escape' && !bigPicture.classList.contains('hidden')) {
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

const postPhotoImage = document.querySelector('.big-picture__img').querySelector('img');
postPhotoImage.src=`../photos/${getRandomPositiveInteger(1,POSTS_COUNT)}.jpg`;
if (!randomComments.length === 0) {
  postPhotoImage.alt=`${randomComments[getRandomPositiveInteger(0,randomComments.length)].name}`;
}
