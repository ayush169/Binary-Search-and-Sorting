const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

const arr = [3, 5, 7, 8, 9, 10];

console.log(binarySearch(arr, 8)); // 3
