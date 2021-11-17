import {closeUserModal} from './utils.js';
import {getData} from './api.js';
import {renderPicture} from '../render/render-picture.js';
import {renderCommentForPost} from '../render/render-comments-for-post.js';
import {setUserFormSubmit} from '../render/render-upload-image.js';
import {showFilters, sortMinPictures} from '../render/render-filter-posts.js';

getData((photoPosts) => {
  renderPicture(photoPosts);
  renderCommentForPost(photoPosts);
  showFilters();
  sortMinPictures(photoPosts);
});

setUserFormSubmit(closeUserModal);
