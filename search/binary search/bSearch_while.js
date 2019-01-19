// return index

const binarySearch = (haystack, needle) => {
  var low = 0;
  var high = haystack.length - 1;
  var middle = (low + high) / 2;

  while (low <= high) {
    middle = Math.floor((low + high) / 2);
    if(haystack[middle] === needle) {
      return middle;
    }
    if(needle > haystack[middle]) {
      low = middle + 1;
    }
    if(needle < haystack[middle]) {
      high = middle - 1;
    }
  }

  return false;
};

// return element

const binarySearch = (haystack, needle) => {
  const middle = Math.floor(haystack.length / 2);
  const middleElement = haystack[middle];

  if(middleElement === needle) {
    return needle;
  }
  if(haystack.length <= 1) {
    return false;
  }
  
  const left = haystack.slice(0, middle);
  const right = haystack.slice(middle + 1);

  if(needle < middleElement) {
    return binarySearch(left, needle);
  }
  return binarySearch(right, needle);
};