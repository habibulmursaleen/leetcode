/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  return arr.reduce((returnedArray, element, index) => {
    returnedArray[index] = fn(element, index);
    return returnedArray;
  }, []);
};
