const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const specialElements = document.querySelectorAll('.effects__preview')


document.querySelector('.big-picture ').classList.add('hidden');
document.querySelector('.img-upload__overlay').classList.remove('hidden');

console.log(sliderElement)


noUiSlider.create(sliderElement, {
    start: 50,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100
    },
    step: 10,
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

sliderElement.noUiSlider.on('update', (values, handle) => {
    valueElement.value = values[handle];

    console.log(valueElement.value)
});

for (let specialElement of specialElements) {
specialElement.addEventListener('change', (evt) => {
    if (evt.target.checked) {
        sliderElement.noUiSlider.updateOptions({
            range: {
                min: 1,
                max: 10
            },
            start: 8,
            step: 0.1
        });
    } else {
        sliderElement.noUiSlider.updateOptions({
            range: {
                min: 0,
                max: 100,
            },
            step: 1
        });
        sliderElement.noUiSlider.set(80);
    }
});
};
