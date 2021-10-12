exprot const getRandomPosts = function(countOfPhotos) {
  return Array.from({length: countOfPhotos}, createPostPhoto);
};
