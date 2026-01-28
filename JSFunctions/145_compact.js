/**
 * Compact Utility
 */

/**
 * Creates an array with all falsey values removed.
 * @param {Array} array 
 * @returns {Array}
 */
function compact(array) {
  let resIndex = 0;
  const result = [];

  if (array == null) {
    return result;
  }

  for (const value of array) {
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = { compact };
