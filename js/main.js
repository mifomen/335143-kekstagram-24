import {checkStringLength} from './utils/check-string-length.js';
import {getRandomPositiveInteger} from './utils/get-random-positive-integer.js';

// eslint-disable-next-line
console.log(getRandomPositiveInteger(123,1233))

const RANDOM_NAMES = ['Полина','Иван','Мира','Виктория','Ариана','Артём','Виктор','Мирослава','Даниил','Екатерина','Михаил','Анна','Татьяна','Адам','Никита','Роман','Стефания','Дмитрий','Захар','Валентина','Алина','Ольга','Вероника','Мартин','Артемий','София','Василий','Антон','Егор','Матвей','Диана','Антонина','Ярослава','Александр','Дамир','Тимур','Дарья','Владимир','Леонид','Алёна','Агата','Милана','Руслан','Андрей','Олег','Арсен','Николай','Валерия','Ярослав','Владислав'];
const COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.','Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.','Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.','Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.','Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный моме'];
const DESCRIPTIONS = ['На кладбище идет, что ли?','Красивое','Мы поедем, мы помчимся','Да здравствуют вредные привычки!','Шрек уже не тот','Что, черт возьми, происходит в австралийской глубинке?','Let\'s rock','Руководитель отдела ИТ-разработки прячется от подчиненных','Всё свое ношу с собой','Раздуло'];

const SIMILAR_PHOTOS_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;

const getRandom = (min,max) => {
  if ( max < min || max < 0 || min < 0 ) {
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getRandomArrayElement(elements) {
  return elements[getRandom(0, elements.length - 1)];
}

const getRandomMessages = (elements) => {
  if (getRandom(0,1)===1) {
    return `${getRandomArrayElement(elements)} ${getRandomArrayElement(elements)}`;
  }
  return getRandomArrayElement(elements);
};

function checkedMaxLength (string,max) {
  return string.length <= max;
}

const testString = 'Ivanov Ivan Ivanich';
checkedMaxLength(testString, 19);
checkStringLength(testString, 19);

function getAvatarImage() {
  return `img/avatar-${getRandom(1, 6)}.svg`;
}

function getRandomComments() {
  return {
    id: getRandom(1,800),
    avatar: getAvatarImage(),
    message: getRandomMessages(COMMENTS),
    name: getRandomArrayElement(RANDOM_NAMES),
  };
}

let postId = 0;
function createPostPhoto() {
  return {
    id: postId++,
    url: getAvatarImage(),
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandom(MIN_LIKES,MAX_LIKES),
    comments: getRandomComments(COMMENTS),
    name: getRandomArrayElement(RANDOM_NAMES),
  };
}


const getRandomPosts = function(countOfPhotos) {
  return Array.from({length: countOfPhotos}, createPostPhoto);
};

// eslint-disable-next-line
const similarPhotos = getRandomPosts(SIMILAR_PHOTOS_COUNT);
// const similarPhotos = Array.from({length: SIMILAR_PHOTOS_COUNT}, createPostPhoto);

// eslint-disable-next-line
console.log(similarPhotos)
