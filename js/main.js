function getRandom(min,max) {
  if (max<min) {
    return 'false';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandom(0,1);

function checkedMaxLength (string,max) {
  if (string.length<=max) { return true; }
  return false;
}

const testString = 'Ivanov Ivan Ivanich';
checkedMaxLength(testString, 19);
