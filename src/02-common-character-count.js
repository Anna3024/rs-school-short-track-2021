/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new Error('Not implemented');
  let n = 0;
  const arr2 = s2.split('');
  s1.split('').forEach((v) => {
    if (arr2.some((el) => el === v)) {
      arr2.splice(arr2.join('').indexOf(v), 1);
      ++n;
    }
  });
  return n;
}

module.exports = getCommonCharacterCount;
