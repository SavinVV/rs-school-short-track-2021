/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let index;
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    index = Math.floor((left + right) / 2);
    if (array[index] === value) { return index; }
    if (array[index] > value) {
      right = index - 1;
    } else {
      left = index + 1;
    }
  }
  return null;
}

module.exports = findIndex;
