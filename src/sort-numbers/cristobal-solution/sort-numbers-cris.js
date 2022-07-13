/**
 * Sorts an array of numbers from smallest to largest.
 *
 * Returns a new array without modifying the original array.
 *
 * Does not need to support: NaN, Infinity, -Infinity.
 *
 * @param {number[]} [price = []] - The array of numbers to sort.
 * @returns {number[]} A new array with the same numbers, but sorted.
 * @example
 *
 * sortNumbers([1.5, 1, -1.5, 0, -1]);
 * // -> [-1.5, -1, 0, 1, 1.5]
 *
 * @example
 * sortNumbers([-1, 0, 1]);
 * // -> [-1, 0, 1]
 */

export const sortingNumbers = (price = []) => {
  // backing up our initial array to avoid any side effects
  const backingUp = [...price];
  // this function sorts the values inside an array in an ascending way
  backingUp.sort((a, b) => {
    return a - b;
  });
  // the return function will show our new array sorted
  return backingUp;
};
