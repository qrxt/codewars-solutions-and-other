const qsort = (arr, comparator = (a, b) => a - b, definePivot = arr => arr[Math.floor(arr.length / 2)]) => {
  if(arr.length <= 1) {
    return arr;
  }

  //const middleIndex = Math.floor(arr.length / 2);
  const pivot = definePivot(arr);

  const values = arr.reduce((acc, item) => {
    if(comparator(item, pivot) < 0) {
      return { ...acc, less: [ ...acc.less, item ]};
    }
    if(comparator(item, pivot) > 0) {
      return { ...acc, more: [ ...acc.more, item ]};
    }
    return { ...acc, equal: [ ...acc.equal, item ]};
  }, {
    less: [],
    equal: [],
    more: []
  });

  return qsort(values.less, comparator, definePivot).concat(values.equal, qsort(values.more, comparator, definePivot));
}

const exampleColl = [-1,79,-60,11,-140,0,1,-1];

const sorted1 = qsort(exampleColl, (item, pivot) => {
  if((pivot - item) > 0) {
    return 1;
  }
  if((pivot - item) < 0) {
    return -1;
  }
  return 0;
}, exampleColl => exampleColl[0]);

console.log(
  sorted1
);