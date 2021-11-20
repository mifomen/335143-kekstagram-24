import { renderPicture } from './render-picture.js';
import { arrayRandomElements,debounce} from '../utils.js';
import {updateComments} from './update-comments.js';

const MAX_COUNT_RANDOM_ITEM = 10;

const minPicturesFilter = document.querySelector('.img-filters');

//показываем кнопки для фильтрации
const showFilters = () => {
  minPicturesFilter.classList.remove('img-filters--inactive');
};

//создаем массив случайных постов
const getRandomPosts = (array) => arrayRandomElements(array).slice(0, MAX_COUNT_RANDOM_ITEM);

//чистим страницу от миниатурных постов
const removeMinPictures = () => {
  document.querySelectorAll('.picture').forEach((element) => {
    element.remove();
  });
};

// функция сортировки по количеству комментариев
const comparePosts = (postA, postB) => postB.comments.length - postA.comments.length;
// сортируем массив по самым осуждаемым
const sortByPopular = (array) => array.slice().sort(comparePosts);

//функция переключени и отрисовки постов
const sortMinPictures = (array) => {
  minPicturesFilter.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('img-filters__button') && !evt.target.classList.contains('img-filters__button--active')) {
      const activeBtn = document.querySelector('.img-filters__button--active');
      activeBtn.classList.remove('img-filters__button--active');

      evt.target.classList.add('img-filters__button--active');
      const filterName = evt.target.id;
      debounce(() => {
        switch (filterName) {
          case 'filter-default':{
            removeMinPictures();
            renderPicture(array);
            updateComments(array);
            break;
          }
          case 'filter-random': {
            removeMinPictures();
            renderPicture(getRandomPosts(array));
            updateComments(array);
            break;
          }
          case 'filter-discussed': {
            removeMinPictures();
            renderPicture(sortByPopular(array));
            updateComments(array);
            break;
          }
        }
      })(filterName);
    }
  });
};

export { showFilters, sortMinPictures };
