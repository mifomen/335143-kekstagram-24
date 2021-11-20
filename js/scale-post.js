const MAX_SIZE = 100;
const MIN_SIZE = 25;
const STEP = 25;
const DEFAULT_SCALE = 100;
const DEFAULT_PARSEINT = 10;

const previewImgElement = document.querySelector('.img-upload__preview img');
const resizeInputElement = document.querySelector('.scale__control--value');
const btnResizeMinusElement = document.querySelector('.scale__control--smaller');
const btnResizePlusElement = document.querySelector('.scale__control--bigger');

resizeInputElement.value = `${DEFAULT_SCALE}%`;

btnResizeMinusElement.addEventListener('click', () => {
  if (parseInt(resizeInputElement.value,DEFAULT_PARSEINT) <= MIN_SIZE + STEP) {resizeInputElement.value = '0%';} else {
    resizeInputElement.value = `${parseInt(resizeInputElement.value,DEFAULT_PARSEINT) - STEP}%`;
  }
  previewImgElement.style.transform = `scale(0${parseInt(resizeInputElement.value,DEFAULT_PARSEINT) / DEFAULT_SCALE })`;
});

btnResizePlusElement.addEventListener('click', () => {
  if (parseInt(resizeInputElement.value,DEFAULT_PARSEINT) >= MAX_SIZE - STEP ) {resizeInputElement.value = `${DEFAULT_SCALE}%`;} else {
    resizeInputElement.value = `${parseInt(resizeInputElement.value,DEFAULT_PARSEINT) + STEP}%`;
  }
  previewImgElement.style.transform = `scale(0${parseInt(resizeInputElement.value,DEFAULT_PARSEINT) / DEFAULT_SCALE })`;
});

export {resizeInputElement,previewImgElement};
