import { increaseArr } from './increaseArr';

describe('increase array', () => {
  test('empty array', () => {
    expect(increaseArr([])).toBeTruthy();
  });
  test('array have element not a number', () => {
    expect(increaseArr('abc')).toMatch('Not a array');
  });
  test('array have 1 number', () => {
    expect(increaseArr([1])).toBeTruthy();
  });
  test('array have element not a number', () => {
    expect(increaseArr(['a', 1, 2, 3, 4, 4, 5])).toMatch('Array have element not a number');
  });
  test('array not increase', () => {
    expect(increaseArr([2, 3, 6, 5])).toBeFalsy();
  });
  test('array increase', () => {
    expect(increaseArr([1, 2, 2, 3, 4, 4, 5])).toBeTruthy();
    expect(increaseArr([1, 2, 3, 4, 5])).toBeTruthy();
    expect(increaseArr([1, 2, 2, 3, 4, 4, 5])).toBeTruthy();
    expect(increaseArr([2, 2, 2, 2])).toBeTruthy();
  });
});
