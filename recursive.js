const binarySearch = (arr, val, start = 0, end = arr.length - 1) => {
  //exit condition
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === val) {
    return mid;
  }
  if (arr[mid] < val) {
    return binarySearch(arr, val, mid + 1, end);
  } else if (arr[mid] > val) {
    return binarySearch(arr, val, start, mid - 1);
  }
};
const arr = [3, 5, 7, 8, 9, 10];

console.log(binarySearch(arr, 88));
