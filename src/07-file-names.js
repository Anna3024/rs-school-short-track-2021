/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new Error('Not implemented');
  const namesN = JSON.parse(JSON.stringify(names));
  const folderArr = [];
  for (let i = 0; i < namesN.length; i++) {
    let j;
    if (folderArr.some((v, a) => {
      j = a;
      return v.name === namesN[i];
    })) {
      namesN[i] += `(${++folderArr[j].count})`;
    }
    folderArr.push({ name: namesN[i], count: 0 });
  }
  return namesN;
}

module.exports = renameFiles;
