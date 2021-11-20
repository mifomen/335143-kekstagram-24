import {resizeInput,preview} from '../scale-post.js';
import {showError,showSucces} from '../utils.js';
import {sendData} from '../api.js';

const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 25;
const MIN_HASHTAG_COUNT = 5;
const MAX_HASHTAG_COUNT = 5;

const body = document.body;
const uploadForm = document.querySelector('#upload-select-image');
const onUploadCancelBtnClick = document.querySelector('#upload-cancel');
const uploadImageOverlay = document.querySelector('.img-upload__overlay');
const templateHashtag = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const onHashTagInput = document.querySelector('.text__hashtags');
const inputDescription = document.querySelector('.text__description');
const photoPreview = document.querySelector('.img-upload__preview img');

const onFileUpload = document.querySelector('#upload-file');
const effectList = document.querySelectorAll('.effects__preview');
const sliderLine = document.querySelector('.effect-level');

const onEscapePress = (evt) => {
  if (evt.code === 'Escape' && !uploadImageOverlay.classList.contains('hidden') && onHashTagInput !==document.activeElement && inputDescription !== document.activeElement) {
    uploadImageOverlay.classList.add('hidden');

    hideUploadOverlay();
  }
};


function hideUploadOverlay() {
  uploadImageOverlay.classList.add('hidden');
  onUploadCancelBtnClick.removeEventListener('click',hideUploadOverlay);
  document.removeEventListener('keydown', onEscapePress);
  uploadForm.reset();
  if (body.classList.contains('modal-open')) {
    body.classList.remove('modal-open');
  }
}

const onLoadImage = () => {
  uploadImageOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  const file = onFileUpload.files[0];
  const onReaderLoad = new FileReader();
  onReaderLoad.addEventListener('load', () => {
    photoPreview.src = onReaderLoad.result;

    [].forEach.call(effectList, (effectPreview) => {
      effectPreview.style.backgroundImage = `url('${onReaderLoad.result}')`;
    });
  });

  onReaderLoad.readAsDataURL(file);
  onUploadCancelBtnClick.addEventListener('click',hideUploadOverlay);
  document.addEventListener('keydown', onEscapePress);
};

uploadForm.addEventListener('change', onLoadImage);


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

onHashTagInput.addEventListener('input', () => {
  const valueLength = onHashTagInput.value.length;

  switch (true) {
    case onHashTagInput.value[0] !== '#': {
      onHashTagInput.setCustomValidity('ХэшТег должен начинаться с #');
      break;
    }
    case templateHashtag.test(onHashTagInput.value) && valueLength < MIN_HASHTAG_LENGTH: {
      onHashTagInput.setCustomValidity(`Еще ${ MIN_HASHTAG_LENGTH - valueLength} символа`);
      break;
    }
    case (templateHashtag.test(onHashTagInput.value) && valueLength > MAX_HASHTAG_LENGTH): {
      onHashTagInput.setCustomValidity(`Набрали на ${ valueLength - MAX_HASHTAG_LENGTH } лишних символов`);
      break;
    }
    case !checkDuplicates(valueToArray(onHashTagInput)) === true: {
      onHashTagInput.setCustomValidity('Есть повторяющие хэштеги, так нельзя');
      break;
    }
    case onHashTagInput.value[onHashTagInput.value.length-1] === ' ' && valueToArray(onHashTagInput).length >= MAX_HASHTAG_COUNT:{
      onHashTagInput.value = onHashTagInput.value.trim();
      break;
    }
    case !checkHashtagCounts(onHashTagInput) === true && valueToArray(onHashTagInput).length >= MIN_HASHTAG_LENGTH:{
      onHashTagInput.setCustomValidity('У вас много хэштегов, максимум 5');
      break;
    }
    case !checkHashtagEvery(onHashTagInput) === true:{
      onHashTagInput.setCustomValidity('У вас неправильно набран хэштег');
      break;
    }
    default: onHashTagInput.setCustomValidity('');{
      onHashTagInput.setCustomValidity('');
    }
  }
  onHashTagInput.reportValidity();
});


onFileUpload.addEventListener('click', () => {
  resizeInput.value = '100%';
  preview.style.transform = 'scale(1)';
  preview.style.filter='';
  if (!sliderLine.classList.contains('hidden')) {
    sliderLine.classList.add('hidden');
  }
});

const setUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(showSucces()),
      () => showError(),
      new FormData(evt.target),
    );
  });
};

export {setUserFormSubmit};
