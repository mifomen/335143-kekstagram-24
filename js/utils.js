import {onEscapePress} from './render/create-comments.js';

const userModalElement = document.querySelector('.img-upload__overlay');
const uploadFormOverlay = document.querySelector('.img-upload__overlay');
const uplaodForm = document.querySelector('#upload-select-image');

const closeUserModal = () => {
  userModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onEscapePress);
};

const showError =() => {
  const succesPopup = document.querySelector('#error');
  const copyPopup = succesPopup.content.cloneNode(true);
  const onPopupFragmentClick = document.createDocumentFragment();
  onPopupFragmentClick.appendChild(copyPopup);
  uploadFormOverlay.classList.add('hidden');
  onPopupFragmentClick.querySelector('.error__button').addEventListener('click', (evt) => {
    evt.preventDefault();
    document.body.removeChild(document.querySelector('.error'));
    uplaodForm.reset();
  });
  document.body.appendChild(onPopupFragmentClick);
};


const showSucces = () => {
  const succesPopup = document.querySelector('#success');
  const copyPopup = succesPopup.content.cloneNode(true);
  const onPopupFragmentClick = document.createDocumentFragment();
  onPopupFragmentClick.appendChild(copyPopup);
  uploadFormOverlay.classList.add('hidden');
  onPopupFragmentClick.querySelector('.success__button').addEventListener('click', (evt) => {
    evt.preventDefault();
    uplaodForm.reset();
    document.body.removeChild(document.querySelector('.success'));

  });
  document.body.appendChild(onPopupFragmentClick);
};

const debounce = (callback, timeoutDelay = 500) =>{
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const arrayRandomElements = (array) => array.slice().sort(() => Math.random() - 0.5);

export {closeUserModal,showError,showSucces,arrayRandomElements,debounce};
