const preview = document.querySelector('.img-upload__preview img');
const resizeInput = document.querySelector('.scale__control--value');
const btnResizeMinus = document.querySelector('.scale__control--smaller');
const btnResizePlus = document.querySelector('.scale__control--bigger');

const MAX_SIZE = 100;
const MIN_SIZE = 25;
const STEP = 25;

const defaultScale= 100;
resizeInput.value = `${defaultScale}%`;

// const scaledImage = () => {}

btnResizeMinus.addEventListener('click', () => {
  if (parseInt(resizeInput.value,10) <= MIN_SIZE + STEP) {resizeInput.value = '0%';} else {
    resizeInput.value = `${parseInt(resizeInput.value,10) - STEP}%`;
  }
  preview.style.transform = `scale(0${parseInt(resizeInput.value,10) / defaultScale })`;
});

btnResizePlus.addEventListener('click', () => {
  if (parseInt(resizeInput.value,10) >= MAX_SIZE - STEP ) {resizeInput.value = `${defaultScale}%`;} else {
    resizeInput.value = `${parseInt(resizeInput.value,10) + STEP}%`;
  }
  preview.style.transform = `scale(0${parseInt(resizeInput.value,10) / defaultScale })`;
});

// document.querySelector('.big-picture').classList.add('hidden');


export {resizeInput,preview};
