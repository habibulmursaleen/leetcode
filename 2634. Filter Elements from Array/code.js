/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  return arr.reduce((filteredArr, x, i) => {
    if (fn(x, i)) {
      filteredArr.push(x);
    }
    return filteredArr;
  }, []);
};
