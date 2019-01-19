const bubbleSort = (arr, comparator = (a, b) => a < b) => {
  for(let i = 1; i < arr.length; i++) {
    for(let j = 1; j < arr.length; j++) {
      if(comparator(arr[j], arr[j - 1])) {
        var temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
}

bubbleSort([4,3,2,1], (a, b) => a > b);