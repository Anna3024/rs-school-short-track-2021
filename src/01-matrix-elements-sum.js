/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new Error('Not implemented');
  const matrixN = JSON.parse(JSON.stringify(matrix));
  let sum = 0;
  for (let i = 0; i < matrixN.length; i++) {
    for (let j = 0; j < matrixN[i].length; j++) {
      if (matrixN[i][j] === 0) {
        let a = i;
        for (a; a < matrixN.length; a++) {
          matrixN[a][j] = 0;
        }
      } else {
        sum += matrixN[i][j];
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
