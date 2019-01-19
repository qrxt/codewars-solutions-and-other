const matrixToString = matrix =>
  console.log(matrix.reduce((acc, row) => {
    return [ ...acc, row.join(", ") ]
  }, []).join("\n"));

const transformToMatrix = input =>
  input.slice(0, input.length - 1).split("").reduce((acc, letter, index) => {
    const lastAccItem = acc.slice(-1)[0];
    const next = [
      lastAccItem.slice(-1)[0],
      ...lastAccItem.slice(0, lastAccItem.length - 1)
    ];
    return [ ...acc, next ];
  }, [ input.split("") ]);

const sortMatrixRows = matrix =>
  matrix.slice().sort();

const encode = input => {
  const sortedMatrix = sortMatrixRows(transformToMatrix(input));
  const indexInMatrix = sortedMatrix.findIndex(item => item.join('') === input);
  const encoded = sortedMatrix.reduce((acc, row) => {
    return [ ...acc, row.slice(-1)[0] ];
  }, []).join('');
  return [ encoded, indexInMatrix ];
}

const decode = (input, rowIndex) => {
  if(!input) {
    return '';
  }
  const lastColumn = input.split("");
  const firstColumn = input.split("").sort();

  const concatColumns = (col1, col2) =>
    col1
      .map((item, index) => `${item}${col2[index]}`)
      .slice()
      .sort();
  
  const matrix = firstColumn.slice(0, firstColumn.length - 1).reduce((acc, item) => {
    return concatColumns(lastColumn, acc);
  }, [ ...firstColumn ]);

  return matrix[rowIndex];
}

decode(encode("hello")[0], encode("hello")[1]);