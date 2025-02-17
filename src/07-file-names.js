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

function renameFiles(name) {
  const result = [];
  name.forEach((e) => {
    if (result.indexOf(e) < 0) {
      result.push(e);
    } else {
      let current = e;
      let conter = 0;
      while (result.indexOf(current) >= 0) {
        for (let i = 0; i <= result.length - 1; i++) {
          if (e === result[i]) {
            conter++;
          }
        }
        current = `${e}(${conter})`;
      }
      result.push(current);
    }
  });
  return result;
}

module.exports = renameFiles;
