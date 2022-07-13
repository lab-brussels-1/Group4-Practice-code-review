import { difference } from './difference.js';

// const difference = (array = [], value = []) => {
//     if (array.length === 0) throw new Error('1st array is empty')
//     if (array === !array.isArray) throw new Error('this is not an array')

//     let newArr = array.filter((curEle) => !value.includes(curEle));

//     for (let i = 0; i < newArr.length; i++) {
//         if (i !== newArr.lastIndexOf(newArr[i]))
//             newArr.splice(i, 1)
//     }
//     return newArr;
// };

describe('difference: check the difference between two array, return the value not include in 1st array', () => {
  describe('difference between two array', () => {
    it('should check difference value', () => {
      expect(difference([1, 2, 3], [1])).toEqual([2, 3]);
    });
    it('should check difference value', () => {
      expect(difference([2], [3, 6, 9])).toEqual([2]);
    });
    it('should check repeated value, return only once', () => {
      expect(difference([1, 2, 1], [2])).toEqual([1]);
    });
    it('should check repeated value, return only once', () => {
      expect(difference([1, 2, 1, 3, 3], [2])).toEqual([1, 3]);
    });
    it('should order of result values are determined ', () => {
      expect(difference([2, 1, 5, 8], [2, 3])).toEqual([1, 5, 8]);
    });
    it('should check string array', () => {
      expect(
        difference(['hi', 'bye'], ['good morning', 'have a nice day']),
      ).toEqual(['hi', 'bye']);
    });
    it('should check boolean array', () => {
      expect(difference([true, false], [false])).toEqual([true]);
    });
  });
});

describe('difference: if pass empty array or different data typeof value, throw error  ', () => {
  describe('check array testing errors', () => {
    it('should not pass empty array, it throw error ', () => {
      expect(() => difference([], [2, 3])).toThrowError();
    });
    it('should not pass direct number, it throw error ', () => {
      expect(() => difference([1, 2, 3], 56)).toThrowError();
    });
    it('should not pass direct boolean value, it throw error', () => {
      expect(() => difference(true, [2, 3])).toThrowError();
    });
    it('should not pass direct string value, it throw error', () => {
      expect(() => difference('hi', 'bye', [2, 3])).toThrowError();
    });
  });
});
