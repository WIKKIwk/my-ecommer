/**
 * Variance Utility
 */

/**
 * Calculate variance
 * @param {Array<number>} numbers 
 * @returns {number}
 */
function variance(numbers) {
  if (!numbers || numbers.length === 0) return 0;
  
  const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  const squareDiffs = numbers.map(value => Math.pow(value - mean, 2));
  
  return squareDiffs.reduce((a, b) => a + b, 0) / numbers.length;
}

module.exports = { variance };
