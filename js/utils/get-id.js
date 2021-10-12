// const getId = (countOfPosts) => {
//   new Array(countOfPosts).fill(null).map = (item,index) => {
//     index;
//   };
// };

// function getId (arrayLength) {
//   return new Array(arrayLength).fill(null).map(function(item,index) {
//     return index.length;
//   });
// }

function getId (newArrayLength) {
  return new Array(newArrayLength).fill(null).length;
  // map(function(item,index) {

  //   return index.length;
  // });
}


export {getId};
