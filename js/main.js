import {similarPhotos} from './data/gen-new-photo-posts.js';

// eslint-disable-next-line
import {renderPicture} from './render/render-picture.js';

// eslint-disable-next-line
console.log(similarPhotos)


// task module7-task2
const bigPicture = document.querySelector('.big-picture');

bigPicture.classList.remove('hidden');

import {getRandomPositiveInteger} from './utils/get-random-positive-integer.js';
import {getRandomComments} from './utils/get-random-comments.js';

const randomComments = new Array(getRandomPositiveInteger(1,25)).fill(null).map((item,index)=>getRandomComments(index));

const renderRandomComments = function ()  {
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


const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 125;
const likesCount = document.querySelector('.likes-count');
likesCount.textContent = getRandomPositiveInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT);

const comments = document.querySelector('.comments-count');
comments.textContent = randomComments.length;

import {getRandomArrayElement} from './utils/get-random-array-element.js';
import {DESCRIPTIONS} from './data/consts.js';

const imgDescription = document.querySelector('.social__caption');
imgDescription.textContent= getRandomArrayElement(DESCRIPTIONS);

document.querySelector('.social__comment-count').classList.add('hidden');
document.querySelector('.comments-loader').classList.add('hidden');

const body = document.querySelector('body');
body.classList.add('modal-open');


renderRandomComments();

// console.log(randomComments);

const hideBigPicture = (item) => {
  item.classList.add('hidden');
  item.classList.remove('overlay');
};

const closePreview = document.querySelector('#picture-cancel');
closePreview.addEventListener('click', () => {
  // bigPicture.classList.add('hidden');
  // bigPicture.classList.remove('overlay');
  hideBigPicture (bigPicture);

  if (body.classList.contains('modal-open')) {
    body.classList.remove('modal-open');
  }
});


document.addEventListener('keydown', (event) => {
  // console.log('key down')
  if (event.code === 'Escape' && !bigPicture.classList.contains('hidden')) {
    hideBigPicture (bigPicture);
    if (body.classList.contains('modal-open')) {
      body.classList.remove('modal-open');
    }
  }
});


const bg = document.querySelector('.big-picture__img');
const bgimg = bg.querySelector('img');


bgimg.src=`../photos/${getRandomPositiveInteger(1,25)}.jpg`;
// `bgimg.alt='';

if (!randomComments.length === 0) {
  bgimg.alt=`${randomComments[getRandomPositiveInteger(0,randomComments.length)].name}`;
}

// console.log(bgimg.alt)
// console.log(bgimg)
