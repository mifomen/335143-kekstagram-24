const userModalElement = document.querySelector('.img-upload__overlay');
const uploadFormOverlay = document.querySelector('.img-upload__overlay');
const uplaodForm = document.querySelector('#upload-select-image');
import {onEscapePress} from './render/render-coments.js';

function closeUserModal () {
  userModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onEscapePress);
}

const showError =() => {
  const succesPopup = document.querySelector('#error');
  const copyPopup = succesPopup.content.cloneNode(true);
  const popupFragment = document.createDocumentFragment();
  popupFragment.appendChild(copyPopup);
  uploadFormOverlay.classList.add('hidden');
  popupFragment.querySelector('.error__button').addEventListener('click', (evt) => {
    evt.preventDefault();
    document.body.removeChild(document.querySelector('.error'));
    uplaodForm.reset();
  });
  document.body.appendChild(popupFragment);
};


const showSucces = () => {
  const succesPopup = document.querySelector('#success');
  const copyPopup = succesPopup.content.cloneNode(true);
  const popupFragment = document.createDocumentFragment();
  popupFragment.appendChild(copyPopup);
  uploadFormOverlay.classList.add('hidden');
  popupFragment.querySelector('.success__button').addEventListener('click', (evt) => {
    evt.preventDefault();
    uplaodForm.reset();
    document.body.removeChild(document.querySelector('.success'));

  });
  document.body.appendChild(popupFragment);
};

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const arrayRandomElements = (array) => array.slice().sort(() => Math.random() - 0.5);

function checkStringLength (string, length) {
  return string.length <= length;
}

export {checkStringLength,closeUserModal,showError,showSucces,arrayRandomElements,debounce};

