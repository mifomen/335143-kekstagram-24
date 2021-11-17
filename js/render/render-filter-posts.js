import { renderPicture } from './render-picture.js';
import { arrayRandomElements,debounce} from '../utils.js';
import {renderCommentForPost} from './render-comments.js';

const minPicturesFilter = document.querySelector('.img-filters');

const showFilters = () => {
  minPicturesFilter.classList.remove('img-filters--inactive');
};

const MAX_COUNT_RANDOM_ITEM = 10;
const getRandomPosts = (array) => arrayRandomElements(array).slice(0, MAX_COUNT_RANDOM_ITEM);

const removeMinPictures = () => {
  document.querySelectorAll('.picture').forEach((element) => {
    element.remove();
  });
};

const comparePosts = (postA, postB) => postB.comments.length - postA.comments.length;

const sortByPopular = (array) => array.slice().sort(comparePosts);

const sortMinPictures = (array) => {
  minPicturesFilter.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('img-filters__button') && !evt.target.classList.contains('img-filters__button--active')) {
      const activeBtn = document.querySelector('.img-filters__button--active');
      activeBtn.classList.remove('img-filters__button--active');

      evt.target.classList.add('img-filters__button--active');
      const filterName = evt.target.id;
      debounce(() => {
        switch (filterName) {
          case 'filter-default':
            removeMinPictures();
            renderPicture(array);
            renderCommentForPost(array);
            break;
          case 'filter-random':
            removeMinPictures();
            renderPicture(getRandomPosts(array));
            renderCommentForPost(array);
            break;
          case 'filter-discussed':
            removeMinPictures();
            renderPicture(sortByPopular(array));
            renderCommentForPost(array);
            break;
        }
      })(filterName);
    }
  });
};

export { showFilters, sortMinPictures };
