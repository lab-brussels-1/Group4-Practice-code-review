/**
 * Sorts an array of numbers from smallest to largest.
 *
 * Returns a new array without modifying the original array.
 *
 * Does not need to support: NaN, Infinity, -Infinity.
 *
 * @param {number[]} [arrOfNumbers=[]] - The array of numbers to sort.
 * @returns {number[]} A new array with the same numbers, but sorted.
 * @example
 * * */

export const sortNumbers = (arrOfNumbers = []) => {
  const price = [15, 10.8, 5, 7.6, 18, -1];
  price.sort((a, b) => {
    return a - b;
  });
  return price;
};
sortNumbers();
