function getRandom(min,max) {
  if ( max < min || max < 0 || min < 0 ) {
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandom(0,1);

function checkedMaxLength (string,max) {
  return string.length <= max;
}

const testString = 'Ivanov Ivan Ivanich';
checkedMaxLength(testString, 19);


const comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный моме'
]

console.log(comments)
