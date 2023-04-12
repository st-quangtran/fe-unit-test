export const increaseArr = (arr: number[]) => {
  if (!Array.isArray(arr)) {
    return 'Not a array';
  }
  console.log(arr, !arr.every(item => typeof item === 'number'));
  if (!arr.every(item => typeof item === 'number')) {
    return 'Array have element not a number';
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};
