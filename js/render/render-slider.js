const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
// const specialElements = document.querySelectorAll('.effects__preview');

const photoPreview = document.querySelector('.img-upload__preview img');

//eslint-disable-next-line
const sliderLine = document.querySelector('.effect-level');

const settingOfSlider = {
  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    start: 0.2,
    step: 0.1,
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    start: 0.2,
    step: 0.1,
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    start: 40,
    step: 1,
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    start: 1.7,
    step: 0.1,
  },
  heat: {
    range: {
      min: 0,
      max: 3,
    },
    start: 2.6,
    step: 0.1,
  },
};

// console.log(settingOfSlider)

// document.querySelector('.big-picture ').classList.add('hidden');
// document.querySelector('.img-upload__overlay').classList.remove('hidden');

//eslint-disable-next-line
console.log(sliderElement);

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
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
};

createSlide(sliderElement);
const allEffectsBtns = document.querySelectorAll('.effects__radio');

for (const effectBtn of allEffectsBtns) {

  effectBtn.addEventListener('click', (evt) => {

    if (evt.target===document.querySelector('#effect-chrome')) {
      sliderElement.noUiSlider.updateOptions(settingOfSlider.chrome);
      if (sliderLine.classList.contains('hidden')) {
        sliderLine.classList.remove('hidden');
      }
    // sliderElement.noUiSlider.destroy();
    } else {

      if (evt.target===document.querySelector('#effect-sepia')) {
        sliderElement.noUiSlider.updateOptions(settingOfSlider.sepia);
        if (sliderLine.classList.contains('hidden')) {
          sliderLine.classList.remove('hidden');
        }
        // sliderElement.noUiSlider.updateOptions(settingOfSlider.sepia);
      } else {

        if (evt.target===document.querySelector('#effect-marvin')) {
          if (sliderLine.classList.contains('hidden')) {
            sliderLine.classList.remove('hidden');
          }
          sliderElement.noUiSlider.updateOptions(settingOfSlider.marvin);
        } else {

          if (evt.target===document.querySelector('#effect-phobos')) {
            if (sliderLine.classList.contains('hidden')) {
              sliderLine.classList.remove('hidden');
            }
            sliderElement.noUiSlider.updateOptions(settingOfSlider.phobos);
          } else {

            if (evt.target===document.querySelector('#effect-heat')) {
              sliderLine.classList.remove('hidden');
              sliderElement.noUiSlider.updateOptions(settingOfSlider.heat);
            }
          }
        }
      }
    }
  });
}
// console.log(photoPreview)
// console.log(`settingOfSlider.chrome= ${settingOfSlider.chrome}`);

sliderElement.noUiSlider.on('update', (values, handle) => {
  valueElement.value = values[handle];

  if (document.querySelector('#effect-none').checked) {
    photoPreview.style.cssText='';
  }

  if (document.querySelector('#effect-chrome').checked) {
    sliderLine.classList.remove('hidden');
    photoPreview.style.filter=`grayscale(${values[handle]})`;
  }
  if (document.querySelector('#effect-sepia').checked){
    photoPreview.style.filter=`sepia(${valueElement.value})`;
  }

  if (document.querySelector('#effect-marvin').checked){
    photoPreview.style.filter=`invert(${valueElement.value}%)`;
  }

  if (document.querySelector('#effect-phobos').checked){
    photoPreview.style.filter=`blur(${valueElement.value}px)`;
  }

  if (document.querySelector('#effect-heat').checked){
    photoPreview.style.filter=`brightness(${valueElement.value})`;
  }
});

// for (const specialElement of specialElements) {
//   specialElement.addEventListener('change', (evt) => {
//     if (evt.target.checked) {
//       sliderElement.noUiSlider.updateOptions({
//         range: {
//           min: 1,
//           max: 10,
//         },
//         start: 8,
//         step: 0.1,
//       });
//     } else {
//       sliderElement.noUiSlider.updateOptions({
//         range: {
//           min: 0,
//           max: 100,
//         },
//         step: 1,
//       });
//       sliderElement.noUiSlider.set(80);
//     }
//   });
// }
