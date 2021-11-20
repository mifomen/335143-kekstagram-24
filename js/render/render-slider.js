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
const photoPreview = document.querySelector('.img-upload__preview img');
const allEffectsBtns = document.querySelectorAll('.effects__radio');
const sliderLine = document.querySelector('.effect-level');

const btnEffectNone= document.querySelector('#effect-none');
const btnEffectChrome = document.querySelector('#effect-chrome');
const btnEffectSepia= document.querySelector('#effect-sepia');
const btnEffectMarvin= document.querySelector('#effect-marvin');
const btnEffectPhobos= document.querySelector('#effect-phobos');
const btnEffectHeat= document.querySelector('#effect-heat');

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
      to: function (value) { // https://prnt.sc/20611yx тту д5 я не понимаю что от меня хотят
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) { // https://prnt.sc/20611yx тту д5 я не понимаю что от меня хотят
        return parseFloat(value);
      },
    },
  });
};

const addClassOnItem = (item,itemClass) => {
  if (item.classList.contains(itemClass)) {
    item.classList.remove(itemClass);
  }
};

createSlide(sliderElement);

if (!sliderLine.classList.contains('hidden')) {
  sliderLine.classList.add('hidden');
}

for (const effectBtn of allEffectsBtns) {
  effectBtn.addEventListener('click', (evt) => {

    if (!sliderLine.classList.contains('hidden')) {
      sliderLine.classList.add('hidden');
    }

    switch (evt.target) {
      case btnEffectNone: {
        if (!sliderLine.classList.contains('hidden')) {
          sliderLine.classList.add('hidden');
        }
        photoPreview.style.filter='';
        break;
      }
      case btnEffectChrome: {
        addClassOnItem(sliderLine,'hidden');
        sliderElement.noUiSlider.updateOptions(settingOfSlider.chrome);
        break;
      }
      case btnEffectSepia:{
        addClassOnItem(sliderLine,'hidden');
        sliderElement.noUiSlider.updateOptions(settingOfSlider.sepia);
        break;
      }
      case btnEffectMarvin:{
        addClassOnItem(sliderLine,'hidden');
        sliderElement.noUiSlider.updateOptions(settingOfSlider.marvin);
        break;
      }
      case btnEffectPhobos:{
        addClassOnItem(sliderLine,'hidden');
        sliderElement.noUiSlider.updateOptions(settingOfSlider.phobos);
        break;
      }
      case btnEffectHeat: {
        addClassOnItem(sliderLine,'hidden');
        sliderElement.noUiSlider.updateOptions(settingOfSlider.heat);
        break;
      }
    }
  });
}


sliderElement.noUiSlider.on('update', (values, handle) => {
  valueElement.value = values[handle];
  if (btnEffectChrome.checked) {
    photoPreview.style.filter=`${GRAYSCALE_FILTER}(${values[handle]})`;
  }
  if (btnEffectSepia.checked){
    photoPreview.style.filter=`${SEPIA_FILTER}(${valueElement.value})`;
  }
  if (btnEffectMarvin.checked){
    photoPreview.style.filter=`${INVERT_FILTER}(${valueElement.value}%)`;
  }
  if (btnEffectPhobos.checked){
    photoPreview.style.filter=`${PHOBOS_FILTER}(${valueElement.value}px)`;
  }
  if (btnEffectHeat.checked){
    photoPreview.style.filter=`${BRIGHTNESS_FILTER}(${valueElement.value})`;
  }
});
