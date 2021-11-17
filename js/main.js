import './render/render-upload-image.js';
import './scale-post.js';
import './render/render-slider.js';

import {closeUserModal} from './utils.js';
import {getData} from './api.js';
import {renderPicture} from './render/render-picture.js';
import {renderCommentForPost} from './render/render-comments.js';
import {setUserFormSubmit} from './render/render-upload-image.js';
import {showFilters, sortMinPictures} from './render/render-filter-posts.js';

getData((photoPosts) => {
  renderPicture(photoPosts);
  renderCommentForPost(photoPosts);
  showFilters();
  sortMinPictures(photoPosts);
});

setUserFormSubmit(closeUserModal);
