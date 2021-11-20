const GRAYSCALE_FILTER = 'grayscale';
const SEPIA_FILTER = 'sepia';
const INVERT_FILTER = 'invert';
const PHOBOS_FILTER = 'blur';
const BRIGHTNESS_FILTER = 'brightness';
const settingOfSlider = {
  chrome: {range: {min: 0,max: 1},start: 1,step: 0.1},
  sepia: {range: {min: 0,max: 1},start: 1,step: 0.1},
  marvin: {range: {min: 0,max: 100},start: 100,step: 1},
  phobos: {range: {min: 0,max: 3},start: 3,step: 0.1},
  heat: {range: {min: 0,max: 3},start: 3,step: 0.1},
};

const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const photoPreviewElement = document.querySelector('.img-upload__preview img');
const allEffectsBtnsElements = document.querySelectorAll('.effects__radio');
const sliderLineElement = document.querySelector('.effect-level');

const btnEffectNoneElement= document.querySelector('#effect-none');
const btnEffectChromeElement = document.querySelector('#effect-chrome');
const btnEffectSepiaElement= document.querySelector('#effect-sepia');
const btnEffectMarvinElement= document.querySelector('#effect-marvin');
const btnEffectPhobosElement= document.querySelector('#effect-phobos');
const btnEffectHeatElement= document.querySelector('#effect-heat');

const createSlide = (element) => {
  noUiSlider.create(element , {
    start: settingOfSlider.chrome.start,
    connect: 'lower',
    range: {
      'min': settingOfSlider.chrome.range.min,
      'max': settingOfSlider.chrome.range.max,
    },
    step: settingOfSlider.chrome.step,
    format: {
      to: (value) => {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: (value) =>  parseFloat(value),
    },
  });
};

const addClassOnItem = (item,itemClass) => {
  if (item.classList.contains(itemClass)) {
    item.classList.remove(itemClass);
  }
};

createSlide(sliderElement);

if (!sliderLineElement.classList.contains('hidden')) {
  sliderLineElement.classList.add('hidden');
}

for (const effectBtn of allEffectsBtnsElements) {
  effectBtn.addEventListener('click', (evt) => {

    if (!sliderLineElement.classList.contains('hidden')) {
      sliderLineElement.classList.add('hidden');
    }

    switch (evt.target) {
      case btnEffectNoneElement: {
        if (!sliderLineElement.classList.contains('hidden')) {
          sliderLineElement.classList.add('hidden');
        }
        photoPreviewElement.style.filter='';
        break;
      }
      case btnEffectChromeElement: {
        addClassOnItem(sliderLineElement,'hidden');
        sliderElement.noUiSlider.updateOptions(settingOfSlider.chrome);
        break;
      }
      case btnEffectSepiaElement:{
        addClassOnItem(sliderLineElement,'hidden');
        sliderElement.noUiSlider.updateOptions(settingOfSlider.sepia);
        break;
      }
      case btnEffectMarvinElement:{
        addClassOnItem(sliderLineElement,'hidden');
        sliderElement.noUiSlider.updateOptions(settingOfSlider.marvin);
        break;
      }
      case btnEffectPhobosElement:{
        addClassOnItem(sliderLineElement,'hidden');
        sliderElement.noUiSlider.updateOptions(settingOfSlider.phobos);
        break;
      }
      case btnEffectHeatElement: {
        addClassOnItem(sliderLineElement,'hidden');
        sliderElement.noUiSlider.updateOptions(settingOfSlider.heat);
        break;
      }
    }
  });
}


sliderElement.noUiSlider.on('update', (values, handle) => {
  valueElement.value = values[handle];
  if (btnEffectChromeElement.checked) {
    photoPreviewElement.style.filter=`${GRAYSCALE_FILTER}(${values[handle]})`;
  }
  if (btnEffectSepiaElement.checked){
    photoPreviewElement.style.filter=`${SEPIA_FILTER}(${valueElement.value})`;
  }
  if (btnEffectMarvinElement.checked){
    photoPreviewElement.style.filter=`${INVERT_FILTER}(${valueElement.value}%)`;
  }
  if (btnEffectPhobosElement.checked){
    photoPreviewElement.style.filter=`${PHOBOS_FILTER}(${valueElement.value}px)`;
  }
  if (btnEffectHeatElement.checked){
    photoPreviewElement.style.filter=`${BRIGHTNESS_FILTER}(${valueElement.value})`;
  }
});
