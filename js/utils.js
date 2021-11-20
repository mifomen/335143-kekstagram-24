import {onEscapePress} from './render/create-comments.js';

const userModalElement = document.querySelector('.img-upload__overlay');
const uploadFormOverlayElement = document.querySelector('.img-upload__overlay');
const uplaodFormElement = document.querySelector('#upload-select-image');

const closeUserModal = () => {
  userModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onEscapePress);
};

const showError =() => {
  const errorPopupElement = document.querySelector('#error');
  const copyPopupElement = errorPopupElement.content.cloneNode(true);
  const popupFragment = document.createDocumentFragment();
  popupFragment.appendChild(copyPopupElement);
  uploadFormOverlayElement.classList.add('hidden');
  popupFragment.querySelector('.error__button').addEventListener('click', (evt) => {
    evt.preventDefault();
    document.body.removeChild(document.querySelector('.error'));
    uplaodFormElement.reset();
  });
  document.body.appendChild(popupFragment);
};

const showSucces = () => {
  const successPopupElement = document.querySelector('#success');
  const copyPopupElement = successPopupElement.content.cloneNode(true);
  const popupFragment = document.createDocumentFragment();
  popupFragment.appendChild(copyPopupElement);
  uploadFormOverlayElement.classList.add('hidden');
  popupFragment.querySelector('.success__button').addEventListener('click', (evt) => {
    evt.preventDefault();
    uplaodFormElement.reset();
    document.body.removeChild(document.querySelector('.success'));

  });
  document.body.appendChild(popupFragment);
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
