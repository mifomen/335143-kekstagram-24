const renderPicture = (renderGetPosts) =>  {
  const picturesListElement = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture');
  const pictureFragment = document.createDocumentFragment();

  renderGetPosts.forEach((photoPost) => {
    const photoElement = pictureTemplate.content.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photoPost.url;
    photoElement.querySelector('.picture__comments').textContent = photoPost.comments.length;
    photoElement.querySelector('.picture__likes').textContent = photoPost.likes;
    photoElement.querySelector('.picture__img').dataset.id = photoPost.id;
    pictureFragment.appendChild(photoElement);

  });
  picturesListElement.appendChild(pictureFragment);
};

export {renderPicture};
