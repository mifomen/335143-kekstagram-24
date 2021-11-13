export let media=[];

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

        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      onSuccess(data);
      const files = new Array(onSuccess(data));
      files.forEach(item => {
        media.push(item);
      })
      console.log(`media=${media}`)
    })
    .catch((err) => {
      onError(err);
    });
};

// export {createLoader};

const loadPosts = createLoader(console.log, console.error);
loadPosts();
 // media = loadPosts();

console.log(media)
