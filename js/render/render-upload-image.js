import {resizeInputElement,previewImgElement} from '../scale-post.js';
import {showError,showSucces} from '../utils.js';
import {sendData} from '../api.js';

const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 25;
const MIN_HASHTAG_COUNT = 5;
const MAX_HASHTAG_COUNT = 5;

const body = document.body;
const uploadFormElement = document.querySelector('#upload-select-image');
const uploadCancelBtnElement = document.querySelector('#upload-cancel');
const uploadImageOverlayElement = document.querySelector('.img-upload__overlay');
const templateHashtag = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const onHashTagInputElement = document.querySelector('.text__hashtags');
const inputDescriptionElement = document.querySelector('.text__description');
const photoPreviewElement = document.querySelector('.img-upload__preview img');

const onFileUploadElement = document.querySelector('#upload-file');
const effectListElement = document.querySelectorAll('.effects__preview');
const sliderLineElement = document.querySelector('.effect-level');

const onEscapePress = (evt) => {
  if (evt.code === 'Escape' && !uploadImageOverlayElement.classList.contains('hidden') && onHashTagInputElement !==document.activeElement && inputDescriptionElement !== document.activeElement) {
    uploadImageOverlayElement.classList.add('hidden');
    closeForm();
  }
};
function closeForm() {
  uploadImageOverlayElement.classList.add('hidden');
  uploadCancelBtnElement.removeEventListener('click',onUploadCancelBtnClick);
  document.removeEventListener('keydown', onEscapePress);
  uploadFormElement.reset();
  if (body.classList.contains('modal-open')) {
    body.classList.remove('modal-open');
  }
}


function onUploadCancelBtnClick() {closeForm();}

const onFormLoadImage = () => {
  uploadImageOverlayElement.classList.remove('hidden');
  body.classList.add('modal-open');
  const file = onFileUploadElement.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    photoPreviewElement.src = reader.result;

    [].forEach.call(effectListElement, (effectPreview) => {
      effectPreview.style.backgroundImage = `url('${reader.result}')`;
    });
  });

  reader.readAsDataURL(file);
  uploadCancelBtnElement.addEventListener('click',onUploadCancelBtnClick);
  document.addEventListener('keydown', onEscapePress);
};

uploadFormElement.addEventListener('change', onFormLoadImage);


const valueToArray = function(item) {
  return item.value.split(' ');
};


const testStringOnHashtag = (item) => {
  if (templateHashtag.test(item)) {
    return true;
  }
};

const checkHashtagCounts = (item) => {
  if ( item.value.length > MIN_HASHTAG_COUNT ) {
    return (valueToArray(item).length <= MAX_HASHTAG_COUNT);
  }
};

const checkHashtagEvery = (item) => {
  if ( item.value.length > MIN_HASHTAG_COUNT ) {
    return(valueToArray(item).every(testStringOnHashtag));
  }
};

const checkDuplicates = (arrItem) => {
  const set = new Set(arrItem);
  return set.size === arrItem.length;
};

onHashTagInputElement.addEventListener('input', () => {
  const valueLength = onHashTagInputElement.value.length;

  switch (true) {
    case onHashTagInputElement.value[0] !== '#': {
      onHashTagInputElement.setCustomValidity('ХэшТег должен начинаться с #');
      break;
    }
    case templateHashtag.test(onHashTagInputElement.value) && valueLength < MIN_HASHTAG_LENGTH: {
      onHashTagInputElement.setCustomValidity(`Еще ${ MIN_HASHTAG_LENGTH - valueLength} символа`);
      break;
    }
    case (templateHashtag.test(onHashTagInputElement.value) && valueLength > MAX_HASHTAG_LENGTH): {
      onHashTagInputElement.setCustomValidity(`Набрали на ${ valueLength - MAX_HASHTAG_LENGTH } лишних символов`);
      break;
    }
    case !checkDuplicates(valueToArray(onHashTagInputElement)) === true: {
      onHashTagInputElement.setCustomValidity('Есть повторяющие хэштеги, так нельзя');
      break;
    }
    case onHashTagInputElement.value[onHashTagInputElement.value.length-1] === ' ' && valueToArray(onHashTagInputElement).length >= MAX_HASHTAG_COUNT:{
      onHashTagInputElement.value = onHashTagInputElement.value.trim();
      break;
    }
    case !checkHashtagCounts(onHashTagInputElement) === true && valueToArray(onHashTagInputElement).length >= MIN_HASHTAG_LENGTH:{
      onHashTagInputElement.setCustomValidity('У вас много хэштегов, максимум 5');
      break;
    }
    case !checkHashtagEvery(onHashTagInputElement) === true:{
      onHashTagInputElement.setCustomValidity('У вас неправильно набран хэштег');
      break;
    }
    default: onHashTagInputElement.setCustomValidity('');{
      onHashTagInputElement.setCustomValidity('');
    }
  }
  onHashTagInputElement.reportValidity();
});


onFileUploadElement.addEventListener('click', () => {
  resizeInputElement.value = '100%';
  previewImgElement.style.transform = 'scale(1)';
  previewImgElement.style.filter='';
  if (!sliderLineElement.classList.contains('hidden')) {
    sliderLineElement.classList.add('hidden');
  }
});

const setUserFormSubmit = (onSuccess) => {
  uploadFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(showSucces()),
      () => showError(),
      new FormData(evt.target),
    );
  });
};

export {setUserFormSubmit};
