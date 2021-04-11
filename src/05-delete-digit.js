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
  let max = 0;
  const arrNum = Array.from(String(n), Number);
  arrNum.forEach((num, index) => {
    const current = arrNum.filter((elem, i) => index !== i).join('');
    if (+current > max) {
      max = current;
    }
  });
  return max;
}

module.exports = deleteDigit;
