/**
 * Compares the values of two arrays.
 *
 * Returns a new array without modifying the original array.
 *
 * The returned array shows the identical numbers foud in the compared arrays.
 *
 * @param {number[]} [firstArray = []] - The first array of numbers to compare.
 * * @param {number[]} [secondArray = []] - The second array of numbers to compare.
 * @returns {number[]} A new array with the identical numbers.
 * @example
 *
 * intersectingArrays([1.5, 1, -1.5, 0, -1], [3, 2, -1.5, 0, 23]);
 * // -> [-1.5, 0]
 *
 * @example
 * intersectingArrays([10, 1, 40, 30], [3, 2, 40, 30]);
 * // -> [40, 30]
 */

export const intersectingArrays = (firstArray = [], secondArray = []) => {
  const intersectedArrays = firstArray.filter((data) =>
    secondArray.includes(data),
  );
  return intersectedArrays;
};
intersectingArrays();
