const selectionSort = (arr) => {
  const iter = (arr, acc) => {
    if(arr.length === 0) {
      return acc;
    }
    const min = Math.min(...arr);
    const nextArr = arr
    .filter(item => item > min)
    .concat(arr.filter(item => item === min).slice(1));
    return iter(nextArr, [ ...acc, min]);
  }

  return iter(arr, []);
}