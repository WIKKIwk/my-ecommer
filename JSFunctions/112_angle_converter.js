/**
 * Angle Conversion
 */

/**
 * Degrees to Radians
 * @param {number} degrees 
 * @returns {number}
 */
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

/**
 * Radians to Degrees
 * @param {number} radians 
 * @returns {number}
 */
function toDegrees(radians) {
  return radians * (180 / Math.PI);
}

module.exports = { toRadians, toDegrees };
