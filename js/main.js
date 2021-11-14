import './data/gen-new-photo-posts.js';
// import './render/render-picture.js';
import './render/render-random-coments.js';
import './render/render-upload-image.js';
import './utils/scale-post.js';
import './render/render-slider.js';
import {getData} from './utils/api.js';
import  {renderPicture} from './render/render-picture.js';
// renderRandomComments

// import './render/server.js';



getData((photoPosts) => {
  renderPicture(photoPosts);
});
