const selectionSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
};

const arr = [4, 2, 1, 5, -1, 8, -3, 0, 10];
console.log(selectionSort(arr));
console.log(arr);
