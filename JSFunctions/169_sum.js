/**
 * Sum Utility
 */

/**
 * Calculate sum of numbers
 * @param {Array<number>} array 
 * @returns {number}
 */
function sum(array) {
  return (array || []).reduce((acc, val) => acc + val, 0);
}

module.exports = { sum };
