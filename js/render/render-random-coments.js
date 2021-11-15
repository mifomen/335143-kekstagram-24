import {getRandomArrayElement} from '../utils/get-random-array-element.js';
import {DESCRIPTIONS,MIN_LIKES,MAX_LIKES,POSTS_COUNT} from '../data/consts.js';
import {getRandomPositiveInteger} from '../utils/get-random-positive-integer.js';
import {getRandomComments} from '../utils/get-random-comments.js';
import {getData} from '../utils/api.js';


export const objToArray = (obj) => {(
  // преобразовать в массив, затем map, затем fromEntries обратно объект
   Object.entries(obj)
  );
}

// const COMMENTS_LENGTH = getRandomPositiveInteger(1,17);
// const randomComments = new Array(COMMENTS_LENGTH).fill(null).map((item,index)=>getRandomComments(index));

const renderComments = function (commentsArray,count) {
  const commentsList = document.querySelector('.social__comments');
  const commentElement = document.querySelector('.social__comment');
  const commentFragment = document.createDocumentFragment();
  commentsList.innerHTML='';

  const createComments = commentsArray.comments.slice(0,count+5);
  createComments.forEach((createComment) => {
    const copyComment = commentElement.cloneNode(true);
    // console.log(createComment);
    copyComment.querySelector('.social__picture').src=createComment.avatar;
    copyComment.querySelector('.social__picture').alt=createComment.name;
    copyComment.querySelector('.social__text').textContent=createComment.message;
    commentFragment.appendChild(copyComment);
  });
  commentsList.appendChild(commentFragment);
  const imgDescription = document.querySelector('.social__caption');
  imgDescription.textContent =commentsArray.description;

  // document.addEventListener('keydown', onEscapePress)
};

const commentCount = document.querySelector('.social__comment-count');
// if (countRenderComment >= randomComments.length) {
//   commentCount.textContent=`${randomComments.length} из ${randomComments.length}`;
// } else {
//   commentCount.textContent=`${countRenderComment} из ${randomComments.length}`;
// }


const commentsLoader = document.querySelector('.comments-loader');

const RENDER_COUNT = 5;

// if (randomComments.length <= countRenderComment) {
//   commentsLoader.classList.add('hidden');
// } else {
//   commentsLoader.addEventListener('click',() =>{

//     countRenderComment = countRenderComment+RENDER_COUNT;
//     renderComments(countRenderComment);
//     if (countRenderComment >=randomComments.length) {
//       commentCount.textContent=`${randomComments.length} из ${randomComments.length}`;
//       commentsLoader.classList.add('hidden');
//     } else {
//       commentCount.textContent=`${countRenderComment} из ${randomComments.length}`;
//     }
//   });
// }

const likesCount = document.querySelector('.likes-count');
likesCount.textContent = getRandomPositiveInteger(MIN_LIKES,MAX_LIKES);

// const imgDescription = document.querySelector('.social__caption');
// imgDescription.textContent= getRandomArrayElement(DESCRIPTIONS);

const body = document.body;
body.classList.add('modal-open');

const bigPicture = document.querySelector('.big-picture');

const openPost = function(item) {
  item.classList.remove('hidden');
};
openPost(bigPicture);

export const onEscapePress = () => {
  if (event.code === 'Escape' && !bigPicture.classList.contains('hidden')) {
    hidePicture ();
  }
};

export function hidePicture() {
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

// const postPhotoImage = document.querySelector('.big-picture__img').querySelector('img');
// postPhotoImage.src=`photos/${getRandomPositiveInteger(1,POSTS_COUNT)}.jpg`;
// if (!randomComments.length === 0) {
//   postPhotoImage.alt=`${randomComments[getRandomPositiveInteger(0,randomComments.length)].name}`;
// }


export {renderComments};
