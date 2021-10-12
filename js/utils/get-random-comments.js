export function getRandomComments() {
  return {
    id: getRandomPositiveInteger(1,800),
    avatar: getAvatarImage(),
    message: getRandomMessages(COMMENTS),
    name: getRandomArrayElement(RANDOM_NAMES),
  };
}
