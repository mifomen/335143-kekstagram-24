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
