const preview = document.querySelector('.img-upload__preview img');
const resizeInput = document.querySelector('.scale__control--value');
const btnResizeMinus = document.querySelector('.scale__control--smaller');
const btnResizePlus = document.querySelector('.scale__control--bigger');

const MAX_SIZE = 100;
const MIN_SIZE = 25;
const STEP = 25;

const DEFAULT_SCALE = 100;
const DEFAULT_PARSEINT = 10;

resizeInput.value = `${DEFAULT_SCALE}%`;

// const scaledImage = () => {}

btnResizeMinus.addEventListener('click', () => {
  if (parseInt(resizeInput.value,DEFAULT_PARSEINT) <= MIN_SIZE + STEP) {resizeInput.value = '0%';} else {
    resizeInput.value = `${parseInt(resizeInput.value,DEFAULT_PARSEINT) - STEP}%`;
  }
  preview.style.transform = `scale(0${parseInt(resizeInput.value,DEFAULT_PARSEINT) / DEFAULT_SCALE })`;
});

btnResizePlus.addEventListener('click', () => {
  if (parseInt(resizeInput.value,DEFAULT_PARSEINT) >= MAX_SIZE - STEP ) {resizeInput.value = `${DEFAULT_SCALE}%`;} else {
    resizeInput.value = `${parseInt(resizeInput.value,DEFAULT_PARSEINT) + STEP}%`;
  }
  preview.style.transform = `scale(0${parseInt(resizeInput.value,DEFAULT_PARSEINT) / DEFAULT_SCALE })`;
});

// document.querySelector('.big-picture').classList.add('hidden');


export {resizeInput,preview};
