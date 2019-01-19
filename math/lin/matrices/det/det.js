const removeRow = (matrix, removedRowIndex) =>
  matrix.filter((element, rowIndex) =>
    rowIndex !== removedRowIndex
  );

const removeColumn = (matrix, removedColumnIndex) =>
  matrix.reduce((acc, row) =>
    [ ...acc,
    row.filter((element, elementIndex) =>
      elementIndex !== removedColumnIndex
    )], []
  );

const minor = (matrix, rowIndex, columnIndex) =>
  removeRow(removeColumn(matrix, columnIndex), rowIndex)

const reverseRows = matrix =>
  matrix.slice().reverse();

const getMainDiagonal = matrix => {
  const iter = (counter, acc) => {
    if(counter === matrix.length ||
       counter === matrix[counter].length) {
         return acc;
    }
    return iter(counter + 1, [ ...acc, matrix[counter][counter] ]);
  }
  return iter(0, []);
}

const getAntiDiagonal = matrix =>
  getMainDiagonal(reverseRows(matrix));

const getWidth = matrix => matrix[0].length;
const getHeight = matrix => matrix.length;

const getSignByPos = (rowIndex, columnIndex) => {
  if(rowIndex % 2 === 0) {
    return (columnIndex % 2 === 0)? 1 : (-1);
  } else {
    return (columnIndex % 2 === 0)? (-1) : 1;
  }
};

const determinant = matrix => {
  if(getWidth(matrix) === 1 && getHeight(matrix) === 1) {
    /* 
      в матрице, состоящей из одного элемента
      определитель равен самому элементу
      (по заданию)
    */
    return matrix[0][0];
  }
  if(getWidth(matrix) === 2 && getHeight(matrix) === 2) {
    const multiply = values => values.reduce((acc, item) => acc * item, 1);
    return multiply(getMainDiagonal(matrix)) - multiply(getAntiDiagonal(matrix));
  }
  return matrix.reduce((acc, row, rowIndex) =>
    row.reduce((acc, column, columnIndex) => {
      const currentMinor = minor(matrix, rowIndex, columnIndex);
      return acc + getSignByPos(rowIndex, columnIndex) * matrix[rowIndex][columnIndex] * determinant(currentMinor);
    }, 0), 0
  );
}

m0 = [
  [1]
];

m1 = [ 
  [1, 3], 
  [2, 5]
];

m2 = [
  [2, 5, 3],
  [1,-2,-1],
  [1, 3, 4]
];

m3 = [
  [0, 1, 2 ,3],
  [4, 0, 1 ,1],
  [0, 1, 2 ,2],
  [-1, 1, -3 ,3],
];