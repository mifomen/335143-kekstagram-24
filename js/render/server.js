let myData='';
const createLoader = (onSuccess, onError) => () => {
  return fetch(
    'https://24.javascript.pages.academy/kekstagram/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => {
      if (response.ok) {
        return myData = response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      myData = data;
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });
};
myData = (createLoader(console.log,console.error)());

export {myData}

console.log(`server.js myData=${myData}`)
// console.log(myData);


// let response = await fetch('https://24.javascript.pages.academy/kekstagram/data',
//   {
//     method: 'GET',
//     credentials: 'same-origin',
//   }
// );

// if (response.ok) { // если HTTP-статус в диапазоне 200-299
//   // получаем тело ответа (см. про этот метод ниже)
//   let json = await response.json();
//    myData = json;
// } else {
//   alert("Ошибка HTTP: " + response.status);
// }


