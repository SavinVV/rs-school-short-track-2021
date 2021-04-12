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
  const result = [];
  for (let i = 0; i <= str.length - 1; i++) {
    if (result.indexOf(str[i]) < 0) {
      const counter = str.split('').filter((e) => e === str[i]).length;
      result.push(counter, str[i]);
    }
  }
  return result.join('').split('1').join('');
}

module.exports = encodeLine;
