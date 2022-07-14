import { intersection } from './intersection.js';

describe('intersection: check the intersection between two array, return the value include in 1st array', () => {
  describe('intersection between two array', () => {
    it('should check intersection value', () => {
      expect(intersection([-1, -2, -3], [1, 2, 3])).toEqual([]);
    });
    it('should check intersection value', () => {
      expect(intersection([1, 2], [3, 6, 9])).toEqual([]);
    });
    it('should check repeated value, return only once', () => {
      expect(intersection([1, 2, 1], [2])).toEqual([2]);
    });
    it('should check repeated value, return only once', () => {
      expect(intersection([1, 1, 1, 1, 1, 2, 1], [2, 1])).toEqual([1, 2]);
    });
    it('should check repeated value, return only once', () => {
      expect(
        intersection([1, 2, 1, 3, 3, 3, 3, 3, 4, 4], [2, 3, 4, 5]),
      ).toEqual([2, 3, 4]);
    });
    it('should order of result values are determined ', () => {
      expect(intersection([2, 1, 5, 8], [2, 3, 5, 8, 8, 8])).toEqual([2, 5, 8]);
    });
    it('should check string array', () => {
      expect(
        intersection(['hi', 'bye'], ['good morning', 'have a nice day']),
      ).toEqual([]);
    });
    it('should check boolean array', () => {
      expect(intersection([true, false], [false])).toEqual([false]);
    });
  });
});

// ========================= testing error ========================

describe('intersection: if pass empty array or different data typeof value, throw error  ', () => {
  describe('check array testing errors', () => {
    it('should not pass empty array, it throw error ', () => {
      expect(() => intersection([], [2, 3])).toThrowError();
    });
    it('should not pass direct number, it throw error ', () => {
      expect(() => intersection([1, 2, 3], 56)).toThrowError();
    });
    it('should not pass direct boolean value, it throw error', () => {
      expect(() => intersection(true, [2, 3])).toThrowError();
    });
    it('should not pass direct string value, it throw error', () => {
      expect(() => intersection('hi', 'bye', [2, 3])).toThrowError();
    });
  });
});
