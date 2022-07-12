export const deepFlat = (array = []) => {
  if (array !== array) throw new Error('this is not an array');
  return array.flat(Infinity);
};
