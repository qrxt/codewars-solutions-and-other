const bsearch = (haystack, needle) => {
  const iter = (min, max) => {
    const middleIndex = Math.floor((min + max) / 2);
    const middle = haystack[middleIndex];

    if(max < min) {
      return null;
    }
    if(middle === needle) {
      return middleIndex;
    }
    return (middle < needle)?
      iter(middleIndex + 1, max):
      iter(min, middleIndex - 1);
  }

  return iter(0, haystack.length - 1);
}

bsearch([1,2,3,4], 0);