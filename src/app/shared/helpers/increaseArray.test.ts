import { increaseArr } from './increaseArr';

describe('Check increase array', () => {
  describe('Is not array', () => {
    test('Null', () => {
      expect(increaseArr(null)).toBe(false);
    });
    test('Undefined', () => {
      expect(increaseArr(undefined)).toBe(false);
    });
    test('String', () => {
      expect(increaseArr('abc')).toBe(false);
    });
    test('Boolean', () => {
      expect(increaseArr(true)).toBe(false);
    });
    test('Boolean', () => {
      expect(increaseArr(false)).toBe(false);
    });
  });
  describe('Array with 0 or 1 element', () => {
    test('Array with 0 or 1 number', () => {
      expect(increaseArr([1])).toBe(false);
      expect(increaseArr([])).toBe(false);
    });
  });
  describe('Array has length more than 2', () => {
    test('Array has element not a number', () => {
      expect(increaseArr(['a', 1, 2, 3])).toBe(false);
    });
    test('Array is not increase', () => {
      expect(increaseArr([1, 2, 6, 5, 4])).toBe(false);
    });
    test('Array is increase', () => {
      expect(increaseArr([1, 2, 2, 3, 4])).toBe(true);
      expect(increaseArr([2.1, 2.2, 2.3])).toBe(true);
      expect(increaseArr([1, 2, 3, 4])).toBe(true);
    });
  });
});
