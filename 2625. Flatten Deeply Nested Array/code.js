function flat(arr, n) {
  if (n === 0) return arr;
  let flattened = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const nested = flat(arr[i], n - 1);
      flattened.push(...nested);
    } else {
      flattened.push(arr[i]);
    }
  }

  return flattened;
}
