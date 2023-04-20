export const increaseArr = (arr: number[]) => {
  if (!Array.isArray(arr) || arr.length < 2) {
    return false;
  }
  return arr.every((item: number, index: number) => {
    return typeof item === 'number' && (index === 0 || item >= arr[index - 1]);
  });
};
