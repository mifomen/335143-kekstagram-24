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
const hashTagInputElement = document.querySelector('.text__hashtags');
const inputDescriptionElement = document.querySelector('.text__description');
const photoPreviewElement = document.querySelector('.img-upload__preview img');

const fileUploadElement = document.querySelector('#upload-file');
const effectListElements = document.querySelectorAll('.effects__preview');
const sliderLineElement = document.querySelector('.effect-level');

const onEscapePress = (evt) => {
  if (evt.code === 'Escape' && !uploadImageOverlayElement.classList.contains('hidden') && hashTagInputElement !==document.activeElement && inputDescriptionElement !== document.activeElement) {
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


function onUploadCancelBtnClick() {
  closeForm();
}

const onFormLoadImage = () => {
  uploadImageOverlayElement.classList.remove('hidden');
  body.classList.add('modal-open');
  const file = fileUploadElement.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    photoPreviewElement.src = reader.result;

    [].forEach.call(effectListElements, (effectPreview) => {
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

hashTagInputElement.addEventListener('input', () => {
  const valueLength = hashTagInputElement.value.length;

  switch (true) {
    case hashTagInputElement.value[0] !== '#': {
      hashTagInputElement.setCustomValidity('ХэшТег должен начинаться с #');
      break;
    }
    case templateHashtag.test(hashTagInputElement.value) && valueLength < MIN_HASHTAG_LENGTH: {
      hashTagInputElement.setCustomValidity(`Еще ${ MIN_HASHTAG_LENGTH - valueLength} символа`);
      break;
    }
    case (templateHashtag.test(hashTagInputElement.value) && valueLength > MAX_HASHTAG_LENGTH): {
      hashTagInputElement.setCustomValidity(`Набрали на ${ valueLength - MAX_HASHTAG_LENGTH } лишних символов`);
      break;
    }
    case !checkDuplicates(valueToArray(hashTagInputElement)) === true: {
      hashTagInputElement.setCustomValidity('Есть повторяющие хэштеги, так нельзя');
      break;
    }
    case hashTagInputElement.value[hashTagInputElement.value.length-1] === ' ' && valueToArray(hashTagInputElement).length >= MAX_HASHTAG_COUNT:{
      hashTagInputElement.value = hashTagInputElement.value.trim();
      break;
    }
    case !checkHashtagCounts(hashTagInputElement) === true && valueToArray(hashTagInputElement).length >= MIN_HASHTAG_LENGTH:{
      hashTagInputElement.setCustomValidity('У вас много хэштегов, максимум 5');
      break;
    }
    case !checkHashtagEvery(hashTagInputElement) === true:{
      hashTagInputElement.setCustomValidity('У вас неправильно набран хэштег');
      break;
    }
    default: hashTagInputElement.setCustomValidity('');{
      hashTagInputElement.setCustomValidity('');
    }
  }
  hashTagInputElement.reportValidity();
});


fileUploadElement.addEventListener('click', () => {
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
