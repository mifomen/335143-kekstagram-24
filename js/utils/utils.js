
const userModalElement = document.querySelector('.img-upload__overlay');
const uploadFormOverlay = document.querySelector('.img-upload__overlay');
const uplaodForm = document.querySelector('#upload-select-image');
import {onEscapePress} from '../render/render-random-coments.js';

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
    // uploadFormOverlay.classList.remove('hidden');
    evt.preventDefault();
    document.body.removeChild(document.querySelector('.error'));
    uplaodForm.reset();
  });
  document.body.appendChild(popupFragment);
};

// showError();

const showSucces = () => {
  //eslint-disable-next-line
  console.log('success')
  const succesPopup = document.querySelector('#success');
  const copyPopup = succesPopup.content.cloneNode(true);
  const popupFragment = document.createDocumentFragment();
  popupFragment.appendChild(copyPopup);
  uploadFormOverlay.classList.add('hidden');
  popupFragment.querySelector('.success__button').addEventListener('click', (evt) => {
    evt.preventDefault();
    // uploadFormOverlay.classList.add('hidden');
    uplaodForm.reset();
    document.body.removeChild(document.querySelector('.success'));

  });
  document.body.appendChild(popupFragment);
};

// showSucces();

export {closeUserModal,showError,showSucces};
