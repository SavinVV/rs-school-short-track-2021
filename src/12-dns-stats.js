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
  const obj = {};
  for (const i of domains) {
    let str = '';
    for (const n of i.split('.').reverse()) {
      str += '.' + n;
      if (!(str in obj)) {
        obj[str] = 1;
      } else {
        obj[str]++;
      }
    }
  }
  return obj;
}

module.exports = getDNSStats;
