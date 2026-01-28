/**
 * Covariance Utility
 */

/**
 * Calculate covariance
 * @param {Array<number>} x 
 * @param {Array<number>} y 
 * @returns {number|null}
 */
function covariance(x, y) {
  if (x.length !== y.length) return null;
  
  const meanX = x.reduce((a, b) => a + b, 0) / x.length;
  const meanY = y.reduce((a, b) => a + b, 0) / y.length;
  
  const sum = x.reduce((acc, xi, i) => {
    return acc + (xi - meanX) * (y[i] - meanY);
  }, 0);
  
  return sum / x.length;
}

module.exports = { covariance };
