import {similarPhotos} from '../data/gen-new-photo-posts.js';

export const renderPicture = function ()  {
  const picturesList = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture');
  const pictureFragment = document.createDocumentFragment();

  similarPhotos.forEach((photoPost) => {
    const photoElement = pictureTemplate.content.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photoPost.url;
    photoElement.querySelector('.picture__comments').textContent = photoPost.length;
    photoElement.querySelector('.picture__likes').textContent = photoPost.likes;
    pictureFragment.appendChild(photoElement);

  });
  picturesList.appendChild(pictureFragment);
};

renderPicture();
