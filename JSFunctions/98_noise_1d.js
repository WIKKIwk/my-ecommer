/**
 * 1D Perlin Noise (Simplified)
 */

/**
 * Generate 1D noise
 * @param {number} x 
 * @returns {number} Value between 0-1
 */
function noise1D(x) {
    x = (x << 13) ^ x;
    return (1.0 - ((x * (x * x * 15731 + 789221) + 1376312589) & 2147483647) / 1073741824.0);
}

module.exports = { noise1D };
