const flatten = arr =>
  arr.reduce((acc, item) => {
    if(item instanceof Array) {
      return acc.concat(flatten(item));
    }
    return [ ...acc, item ];
  }, []);