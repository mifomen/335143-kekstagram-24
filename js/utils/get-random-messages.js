export const getRandomMessages = (elements) => {
  if (getRandomPositiveInteger(0,1)===1) {
    return `${getRandomArrayElement(elements)} ${getRandomArrayElement(elements)}`;
  }
  return getRandomArrayElement(elements);
};
