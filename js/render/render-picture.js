import {similarPhotos} from '../data/gen-new-photo-posts.js';
import {getPhotoById} from '../utils/get-photo-by-id.js';

export const renderPicture = function ()  {
  const picturesList = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture');
  const pictureFragment = document.createDocumentFragment();

  similarPhotos.forEach((photoPost,index) => {
    const photoElement = pictureTemplate.content.cloneNode(true);
    photoElement.querySelector('.picture__img').src = getPhotoById(index+1);
    photoElement.querySelector('.picture__comments').textContent = photoPost.length;
    photoElement.querySelector('.picture__likes').textContent = photoPost.likes;
    pictureFragment.appendChild(photoElement);

  });
  picturesList.appendChild(pictureFragment);
};

renderPicture();
