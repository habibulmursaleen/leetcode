/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const mergedArray = arr1.concat(arr2).reduce((acc, obj) => {
    const key = obj.id;
    if (!acc[key]) {
      acc[key] = obj;
    } else {
      acc[key] = { ...acc[key], ...obj };
    }
    return acc;
  }, {});
  return Object.values(mergedArray);
};
