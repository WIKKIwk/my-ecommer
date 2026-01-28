/**
 * Array Intersection
 */

/**
 * Get intersection of two arrays
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns {Array} Common elements
 */
function intersection(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(x => set2.has(x));
}

module.exports = { intersection };
