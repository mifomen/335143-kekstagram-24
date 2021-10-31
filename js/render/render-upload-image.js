import {BODY} from './render-random-coments.js';

const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 25;
const MAX_DESCRIPTION_LENGTH = 140;

const uploadForm = document.querySelector('#upload-select-image');
const uploadCancelBtn = document.querySelector('#upload-cancel');
const uploadImageOverlay = document.querySelector('.img-upload__overlay');
const checkHashTag = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const hashInput = document.querySelector('.text__hashtags');
const inputDescription = document.querySelector('.text__description');
const photoPreview = document.querySelector('.img-upload__preview img');

const uploadFile = document.querySelector('#upload-file');
const effectList = document.querySelectorAll('.effects__preview');


const onEscapePress = () => {
  if (event.code === 'Escape' && !uploadImageOverlay.classList.contains('hidden') && hashInput !==document.activeElement && inputDescription !== document.activeElement) {
    uploadImageOverlay.classList.add('hidden');

    uploadForm.reset();
    if (BODY.classList.contains('modal-open')) {
      BODY.classList.remove('modal-open');
    }
  }
};


function hideUploadOverlay() {
  uploadImageOverlay.classList.add('hidden');
  uploadCancelBtn.removeEventListener('click',hideUploadOverlay);
  document.removeEventListener('keydown', onEscapePress);
  uploadForm.reset();
}
const onLoadImage = () => {
  uploadImageOverlay.classList.remove('hidden');
  BODY.classList.add('modal-open');
  const file = uploadFile.files[0];
  const READER = new FileReader();
  READER.addEventListener('load', () => {
    photoPreview.src = READER.result;

    [].forEach.call(effectList, (effectPreview) => {
      effectPreview.style.backgroundImage = `url('${READER.result}')`;
    });
  });

  READER.readAsDataURL(file);
  uploadCancelBtn.addEventListener('click',hideUploadOverlay);
  document.addEventListener('keydown', onEscapePress);
};

uploadForm.addEventListener('change', onLoadImage);


hashInput.addEventListener('input', () => {
  const valueLength = hashInput.value.length;

  // console.log(hashInput.value[hashInput.value.length-1])

  if (hashInput.value[0] !== '#') {
    hashInput.setCustomValidity('ХэшТег должен начинаться с #');
  } else if (checkHashTag.test(hashInput.value) && valueLength < MIN_HASHTAG_LENGTH) {
    hashInput.setCustomValidity(`Еще ${ MIN_HASHTAG_LENGTH - valueLength} символа`);
  } else if (checkHashTag.test(hashInput.value) && valueLength > MAX_HASHTAG_LENGTH) {
    hashInput.setCustomValidity(`Набрали на ${ valueLength - MAX_HASHTAG_LENGTH } лишних символов`);
  } else {
    hashInput.setCustomValidity('');
  }

  // if (checkHashTag.test(hashInput.value)) {
  //   console.log(checkHashTag.test(hashInput.value))
  //   hashInput.setCustomValidity(`Это не ХэшТег`);
  // } else {
  //   hashInput.setCustomValidity('');
  // }

  hashInput.reportValidity();
});

inputDescription.addEventListener('input', () => {
  const valueLength = inputDescription.value.length;
  if (valueLength > MAX_DESCRIPTION_LENGTH ) {
    inputDescription.setCustomValidity(`Набрали на ${ valueLength - MAX_DESCRIPTION_LENGTH } лишних символов`);
  } else {
    inputDescription.setCustomValidity('');
  }
  inputDescription.reportValidity();
});


// photoPreview
const reader = new FileReader();

reader.addEventListener('load', () => {
  photoPreview.src = reader.result;

});
