export const difference = (array = [], value = []) => {
  if (array.length === 0) throw new Error('1st array is empty');
  if (array === !array.isArray) throw new Error('this is not an array');

  const newArr = array.filter((curEle) => !value.includes(curEle));

  for (let i = 0; i < newArr.length; i++) {
    if (i !== newArr.lastIndexOf(newArr[i])) newArr.splice(i, 1);
  }
  return newArr;
};
