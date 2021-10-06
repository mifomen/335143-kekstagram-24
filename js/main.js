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

const randomNames = ['Полина','Иван','Мира','Виктория','Ариана','Артём','Виктор','Мирослава','Даниил','Екатерина','Михаил','Анна','Татьяна','Адам','Никита','Роман','Стефания','Дмитрий','Захар','Валентина','Алина','Ольга','Вероника','Мартин','Артемий','София','Василий','Антон','Егор','Матвей','Диана','Антонина','Ярослава','Александр','Дамир','Тимур','Дарья','Владимир','Леонид','Алёна','Агата','Милана','Руслан','Андрей','Олег','Арсен','Николай','Валерия','Ярослав','Владислав'];

const messages = [
  'Всё отлично!',  'В целом всё неплохо. Но не всё.','Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.','Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.','Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.','Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный моме'];

const descriptions = [
  'На кладбище идет, что ли?','Красивое','Мы поедем, мы помчимся','Да здравствуют вредные привычки!','Шрек уже не тот','Что, черт возьми, происходит в австралийской глубинке?','Let\'s rock','Руководитель отдела ИТ-разработки прячется от подчиненных','Всё свое ношу с собой','Раздуло'];

const getRandomMessages = (elements) => {
  if (getRandom(0,1)===1) {
    return getRandomArrayElement(elements) + getRandomArrayElement(elements);
  }
  return getRandomArrayElement(elements);
};

const SIMILAR_PHOTOS_COUNT = 25;

function getRandomArrayElement(elements) {
  return elements[getRandom(0, elements.length - 1)];
}

const getAvatarImage = function() {
  const firstUrlPart = 'img/avatar-';
  const secondUrlPart = '.svg';
  const imageId = [getRandom(1, 6)];
  return ''.concat(firstUrlPart,imageId,secondUrlPart);
};

let indexId = 0;
const createPostPhoto = function() {
  return {
    id: indexId++,
    url: getAvatarImage(),
    description: getRandomArrayElement(descriptions),
    likes: getRandom(15,200),
    // message: getRandomArrayElement(messages),
    message: getRandomMessages(messages),
    name: getRandomArrayElement(randomNames),
  };
};


const getRandomPosts = function (countOfPhotos) {
  return Array.from({length: countOfPhotos}, createPostPhoto);
};

const similarPhotos = getRandomPosts(SIMILAR_PHOTOS_COUNT);
// const similarPhotos = Array.from({length: SIMILAR_PHOTOS_COUNT}, createPostPhoto);

