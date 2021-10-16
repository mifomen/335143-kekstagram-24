import {similarPhotos} from './data/gen-new-photo-posts.js';

// eslint-disable-next-line
import {renderPicture} from './render/render-picture.js';

// eslint-disable-next-line
console.log(similarPhotos)


// task module7-task2
let BigPicture = document.querySelector('.big-picture')

BigPicture.classList.remove('hidden')

import {getRandomPositiveInteger} from './utils/get-random-positive-integer.js';
import {getRandomComments} from './utils/get-random-comments.js';

let randomComments = new Array(getRandomPositiveInteger(1,25)).fill(null).map((item,index)=>getRandomComments(index));

const renderRandomComments = function ()  {
  let commentsList = document.querySelector('.social__comments');
  let commentElement = document.querySelector('.social__comment');
  let commentFragment = document.createDocumentFragment();
  commentsList.innerHTML='';

  randomComments.forEach((randomComment) => {
    const copyComment = commentElement.cloneNode(true);
    copyComment.querySelector('.social__picture').src=randomComment.avatar;
    copyComment.querySelector('.social__picture').alt=randomComment.name;
    copyComment.querySelector('.social__text').textContent=randomComment.message;
    commentFragment.appendChild(copyComment)
  })
  commentsList.appendChild(commentFragment)
}

let likes = document.querySelector('.likes-count');
likes.textContent = getRandomPositiveInteger(15,125)

let comments = document.querySelector('.comments-count');
comments.textContent = randomComments.length;

import {getRandomArrayElement} from './utils/get-random-array-element.js';
import {DESCRIPTIONS} from './data/consts.js';

let l = document.querySelector('.social__caption');
l.textContent= getRandomArrayElement(DESCRIPTIONS);

document.querySelector('.social__comment-count').classList.add('hidden')
document.querySelector('.comments-loader').classList.add('hidden')

const body = document.querySelector('body')
body.classList.add('modal-open')


renderRandomComments();

console.log(randomComments);

let closePreview = document.querySelector('#picture-cancel');
closePreview.addEventListener('click', function () {
  BigPicture.classList.add('hidden')

  if (body.classList.contains('modal-open')) {
    body.classList.remove('modal-open')
  }
})


document.addEventListener('keydown', function(event) {
  if (event.code === 'Escape' && !BigPicture.classList.contains('hidden')) {
    BigPicture.classList.add('hidden')
    if (body.classList.contains('modal-open')) {
      body.classList.remove('modal-open')
    }
  }
});
