/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new Error('Not implemented');
  const strN = `${n}`;
  const arrN = [];
  for (let i = 0; i < strN.length; i++) {
    const myStr = strN.split('');
    myStr.splice(i, 1);
    arrN.push(myStr.join(''));
  }
  return +arrN.sort((a, b) => b - a)[0];
}

module.exports = deleteDigit;
