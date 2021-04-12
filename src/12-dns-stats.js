/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new Error('Not implemented');
  const domainsSplit = [];
  const resultObj = {};

  for (let i = 0; i < domains.length; i++) {
    domainsSplit.push(domains[i].split('.').reverse());
  }

  for (let i = 0; i < domainsSplit.length; i++) {
    for (let j = 0; j < domainsSplit[i].length; j++) {
      if (j === 0) {
        domainsSplit[i][j] = `.${domainsSplit[i][j]}`;
      } else {
        domainsSplit[i][j] = `${domainsSplit[i][j - 1]}.${domainsSplit[i][j]}`;
      }
    }
  }

  for (let i = 0; i < domainsSplit.length; i++) {
    for (let j = 0; j < domainsSplit[i].length; j++) {
      if (domainsSplit[i][j] in resultObj) {
        ++resultObj[domainsSplit[i][j]];
      } else {
        resultObj[domainsSplit[i][j]] = 1;
      }
    }
  }
  return resultObj;
}

module.exports = getDNSStats;
