const DATA_GET_URL = 'https://24.javascript.pages.academy/kekstagram/data';
const DATA_POST_URL = 'https://24.javascript.pages.academy/kekstagram';

const getData = (onSuccess) => {
  fetch(DATA_GET_URL)
    .then((response) => response.json())
    .then((photoPosts) => {
      onSuccess(photoPosts);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(DATA_POST_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
