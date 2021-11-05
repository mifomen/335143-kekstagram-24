import {resizeInput,preview} from '../utils/scale-post.js';

const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 25;
const MIN_HASHTAG_COUNT = 5;
const MAX_HASHTAG_COUNT = 5;

const body = document.body;
const uploadForm = document.querySelector('#upload-select-image');
const uploadCancelBtn = document.querySelector('#upload-cancel');
const uploadImageOverlay = document.querySelector('.img-upload__overlay');
const templateHashtag = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const inputHashtag = document.querySelector('.text__hashtags');
const inputDescription = document.querySelector('.text__description');
const photoPreview = document.querySelector('.img-upload__preview img');
// const uploadBtnSubmit = document.querySelector('.img-upload__submit');

const uploadFile = document.querySelector('#upload-file');
const effectList = document.querySelectorAll('.effects__preview');


const onEscapePress = () => {
  if (event.code === 'Escape' && !uploadImageOverlay.classList.contains('hidden') && inputHashtag !==document.activeElement && inputDescription !== document.activeElement) {
    uploadImageOverlay.classList.add('hidden');

    hideUploadOverlay();
  }
};


function hideUploadOverlay() {
  uploadImageOverlay.classList.add('hidden');
  uploadCancelBtn.removeEventListener('click',hideUploadOverlay);
  document.removeEventListener('keydown', onEscapePress);
  uploadForm.reset();
  if (body.classList.contains('modal-open')) {
    body.classList.remove('modal-open');
  }
}

const onLoadImage = () => {
  uploadImageOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  const file = uploadFile.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    photoPreview.src = reader.result;

    [].forEach.call(effectList, (effectPreview) => {
      effectPreview.style.backgroundImage = `url('${reader.result}')`;
    });
  });

  reader.readAsDataURL(file);
  uploadCancelBtn.addEventListener('click',hideUploadOverlay);
  document.addEventListener('keydown', onEscapePress);
};

uploadForm.addEventListener('change', onLoadImage);

const testStringOnHashtag = (item) => {
  if (templateHashtag.test(item)) {
    return true;
  }
};

const checkHashtagCounts = (item) => {
  if ( item.value.length > MIN_HASHTAG_COUNT ) {
    const arr = item.value.split(' ');
    if (arr.length <= MAX_HASHTAG_COUNT) {
      return true;
    } else {
      return false;
    }
  }
};

const checkHashtagEvery = (item) => {
  if ( item.value.length > MIN_HASHTAG_COUNT ) {
    const arr = item.value.split(' ');
    if (arr.every(testStringOnHashtag)) {
      return true;
    } else {
      return false;
    }
  }
};

// inputHashtag.value = '#121a3 #12333 #mifomf #mifme';

inputHashtag.addEventListener('input', () => {
  const valueLength = inputHashtag.value.length;

  // testHashtag(inputHashtag);
  // console.log(testHashtag(inputHashtag))

  if (inputHashtag.value[0] !== '#') {
    inputHashtag.setCustomValidity('ХэшТег должен начинаться с #');
  } else if (templateHashtag.test(inputHashtag.value) && valueLength < MIN_HASHTAG_LENGTH) {
    inputHashtag.setCustomValidity(`Еще ${ MIN_HASHTAG_LENGTH - valueLength} символа`);
  } else if (templateHashtag.test(inputHashtag.value) && valueLength > MAX_HASHTAG_LENGTH) {
    inputHashtag.setCustomValidity(`Набрали на ${ valueLength - MAX_HASHTAG_LENGTH } лишних символов`);
  } else if (inputHashtag.value[inputHashtag.value.length-1] === ' ') {
    inputHashtag.setCustomValidity('Пробелы в конце нельзя');
  } else if (!checkHashtagCounts(inputHashtag) === true) {
    inputHashtag.setCustomValidity('У вас много хэштегов, максимум 5');
  } else if (!checkHashtagEvery(inputHashtag) === true) {
    inputHashtag.setCustomValidity('У вас неправильно набран хэштег');
  } else {
    inputHashtag.setCustomValidity('');
  }

  inputHashtag.reportValidity();
});

// inputDescription.addEventListener('input', () => {
//   const valueLength = inputDescription.value.length;
//   if (!checkStringLength(inputDescription.value,MAX_DESCRIPTION_LENGTH)) {
//     inputDescription.setCustomValidity(`Набрали на ${ valueLength - MAX_DESCRIPTION_LENGTH } лишних символов`);
//   } else {
//     inputDescription.setCustomValidity('');
//   }
//   inputDescription.reportValidity();
// });


uploadFile.addEventListener('click', () => {
  resizeInput.value = '100%';
  preview.style.transform = 'scale(1)';
});

