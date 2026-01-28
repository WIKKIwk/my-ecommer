/**
 * Array Difference
 */

/**
 * Get difference between two arrays
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns {Array} Elements in arr1 but not in arr2
 */
function difference(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(x => !set2.has(x));
}

module.exports = { difference };
