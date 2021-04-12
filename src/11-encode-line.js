/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new Error('Not implemented');
  const arrStr = str.split('');
  let shortStr = '';
  let n;
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] !== arrStr[i - 1] && arrStr[i] === arrStr[i + 1]) {
      n = 1;
    } else if (arrStr[i] === arrStr[i - 1] && arrStr[i] !== arrStr[i + 1]) {
      n++;
      shortStr += n + arrStr[i];
    } else if (arrStr[i] === arrStr[i - 1] && arrStr[i] === arrStr[i + 1]) {
      n++;
    } else if (arrStr[i] !== arrStr[i - 1] && arrStr[i] !== arrStr[i + 1]) {
      shortStr += arrStr[i];
    }
  }
  return shortStr;
}

module.exports = encodeLine;
