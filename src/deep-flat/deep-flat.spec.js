//import { deepFlat } from './deep-flat.js';

const deepFlat = (array = []) => {
  if (array != array) throw new Error('this is not an array');
  return array.flat(Infinity);
};

// =================== testing pass ====================

describe('deepFlat: this function convert nested array into single array', () => {
  describe('it should pass two dimensional array', () => {
    it('two dimensional array', () => {
      expect(deepFlat([1, 2, [3, 4], 5])).toEqual([1, 2, 3, 4, 5]);
    });
    it('two dimensional array', () => {
      expect(deepFlat([2, [4, 6, 8], 10])).toEqual([2, 4, 6, 8, 10]);
    });
    it('two dimensional array', () => {
      expect(deepFlat([5, 15, 25, [10, 20, 30]])).toEqual([
        5,
        15,
        25,
        10,
        20,
        30,
      ]);
    });
  });
  describe('it should pass three dimensional array', () => {
    it('three dimensional number array  ', () => {
      expect(deepFlat([1, 2, 3, [2, [4], 6], 5])).toEqual([
        1,
        2,
        3,
        2,
        4,
        6,
        5,
      ]);
    });
    it('three dimensional string array', () => {
      expect(
        deepFlat(['hi', ['hello', 'morning'], ['bye', 'good night']]),
      ).toEqual(['hi', 'hello', 'morning', 'bye', 'good night']);
    });
  });
  describe('it should pass four dimensional array', () => {
    it('four dimensional string array', () => {
      expect(deepFlat(['a', ['b', [['c'], ['d']], 'e']])).toEqual([
        'a',
        'b',
        'c',
        'd',
        'e',
      ]);
    });
    it('four dimensional string array', () => {
      expect(deepFlat(['11', ['22', [['33'], ['44']], '55']])).toEqual([
        '11',
        '22',
        '33',
        '44',
        '55',
      ]);
    });
  });
  describe('it should pass empty and single dimensional array', () => {
    it('empty array', () => {
      expect(deepFlat([])).toEqual([]);
    });
    it('single dimensional array', () => {
      expect(deepFlat([5, 6, 7, 8])).toEqual([5, 6, 7, 8]);
    });
  });
});

// =============== Error testing ======================

describe('deepFlat: it should not an array, throw error', () => {
  describe('should not pass other data type of value', () => {
    it('should not pass direct number', () => {
      expect(() => deepFlat(12345)).toThrowError();
    });
    it('should not pass the object array', () => {
      expect(() => deepFlat({ 1: 2, 3: 4, 5: 6 })).toThrowError();
    });
    it('should not pass direct string', () => {
      expect(() => deepFlat('hi! how are you')).toThrowError();
    });
    it('should not pass direct boolean value', () => {
      expect(() => deepFlat(true)).toThrowError();
    });
  });
});
