import {getRandomArrayElement} from '../utils/get-random-array-element.js';
import {DESCRIPTIONS,MIN_LIKES,MAX_LIKES,POSTS_COUNT} from '../data/consts.js';
import {getRandomPositiveInteger} from '../utils/get-random-positive-integer.js';
import {getRandomComments} from '../utils/get-random-comments.js';

const COMMENTS_LENGTH = getRandomPositiveInteger(1,17);
const randomComments = new Array(COMMENTS_LENGTH).fill(null).map((item,index)=>getRandomComments(index));

const renderRandomComments = function (count)  {
  const commentsList = document.querySelector('.social__comments');
  const commentElement = document.querySelector('.social__comment');
  const commentFragment = document.createDocumentFragment();
  commentsList.innerHTML='';

  const renderComments = randomComments.slice(0,count+5);
  renderComments.forEach((renderComment) => {
    const copyComment = commentElement.cloneNode(true);
    copyComment.querySelector('.social__picture').src=renderComment.avatar;
    copyComment.querySelector('.social__picture').alt=renderComment.name;
    copyComment.querySelector('.social__text').textContent=renderComment.message;
    commentFragment.appendChild(copyComment);
  });
  commentsList.appendChild(commentFragment);
};

const firstFiveComments = 0;
renderRandomComments(firstFiveComments);

let countRenderComment = 5;

const commentCount = document.querySelector('.social__comment-count');
if (countRenderComment >= randomComments.length) {
  commentCount.textContent=`${randomComments.length} из ${randomComments.length}`;
} else {
  commentCount.textContent=`5 из ${randomComments.length}`;
}


const commentsLoader = document.querySelector('.comments-loader');

if (randomComments.length <= countRenderComment) {
  commentsLoader.classList.add('hidden');
} else {
  commentsLoader.addEventListener('click',() =>{
    countRenderComment = countRenderComment+5;
    renderRandomComments(countRenderComment);
    if (countRenderComment >=randomComments.length) {
      commentCount.textContent=`${randomComments.length} из ${randomComments.length}`;
      commentsLoader.classList.add('hidden');
    } else {
      commentCount.textContent=`${countRenderComment} из ${randomComments.length}`;
    }
  });
}

const likesCount = document.querySelector('.likes-count');
likesCount.textContent = getRandomPositiveInteger(MIN_LIKES,MAX_LIKES);

const imgDescription = document.querySelector('.social__caption');
imgDescription.textContent= getRandomArrayElement(DESCRIPTIONS);

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
postPhotoImage.src=`photos/${getRandomPositiveInteger(1,POSTS_COUNT)}.jpg`;
if (!randomComments.length === 0) {
  postPhotoImage.alt=`${randomComments[getRandomPositiveInteger(0,randomComments.length)].name}`;
}
