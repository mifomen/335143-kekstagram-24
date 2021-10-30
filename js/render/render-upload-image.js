const uploadForm = document.querySelector('#upload-select-image');

const onLoadImage = () => {
  console.log('load di');
}

onLoadImage()
uploadForm.onload = function () {
  onLoadImage();

}
