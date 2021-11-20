const MAX_SIZE = 100;
const MIN_SIZE = 25;
const STEP = 25;
const DEFAULT_SCALE = 100;
const DEFAULT_PARSEINT = 10;

const preview = document.querySelector('.img-upload__preview img');
const resizeInput = document.querySelector('.scale__control--value');
const onResizeMinusBtnCLick = document.querySelector('.scale__control--smaller');
const onResizePlusBtnCLick = document.querySelector('.scale__control--bigger');

resizeInput.value = `${DEFAULT_SCALE}%`;


onResizeMinusBtnCLick.addEventListener('click', () => {
  if (parseInt(resizeInput.value,DEFAULT_PARSEINT) <= MIN_SIZE + STEP) {resizeInput.value = '0%';} else {
    resizeInput.value = `${parseInt(resizeInput.value,DEFAULT_PARSEINT) - STEP}%`;
  }
  preview.style.transform = `scale(0${parseInt(resizeInput.value,DEFAULT_PARSEINT) / DEFAULT_SCALE })`;
});

onResizePlusBtnCLick.addEventListener('click', () => {
  if (parseInt(resizeInput.value,DEFAULT_PARSEINT) >= MAX_SIZE - STEP ) {resizeInput.value = `${DEFAULT_SCALE}%`;} else {
    resizeInput.value = `${parseInt(resizeInput.value,DEFAULT_PARSEINT) + STEP}%`;
  }
  preview.style.transform = `scale(0${parseInt(resizeInput.value,DEFAULT_PARSEINT) / DEFAULT_SCALE })`;
});

export {resizeInput,preview};
