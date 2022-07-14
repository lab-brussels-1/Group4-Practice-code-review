export const intersection = (array = [], values = []) => {
  if (array.length === 0) throw new Error('1st array is empty');
  if (array === !array.isArray) throw new Error('this is not an array');

  let filterArray = array.filter((curEle) => values.includes(curEle));
  filterArray = Array.from(new Set(filterArray));
  return filterArray;
};
