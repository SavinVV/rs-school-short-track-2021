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
  for (const i of str) {
    if (result.indexOf(i) < 0) {
      const counter = str.split('').filter((e) => e === i).length;
      result.push(counter, i);
    }
  }
  return result.join('');
}

module.exports = encodeLine;
