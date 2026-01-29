/**
 * Covariance Utility
 */

/**
 * Calculate covariance
 * @param {Array<number>} x 
 * @param {Array<number>} y 
 * @returns {number}
 */
function covariance(x, y) {
    if (x.length !== y.length || x.length === 0) return 0;

    const meanX = x.reduce((a, b) => a + b, 0) / x.length;
    const meanY = y.reduce((a, b) => a + b, 0) / y.length;

    const sum = x.reduce((acc, val, i) => acc + (val - meanX) * (y[i] - meanY), 0);

    return sum / x.length;
}

module.exports = { covariance };
