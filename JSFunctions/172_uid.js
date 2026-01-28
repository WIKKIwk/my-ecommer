/**
 * UID Generator
 */

/**
 * Generate short unique ID
 * @param {number} length 
 * @returns {string} UID
 */
function uid(length = 7) {
  return Math.random().toString(36).substring(2, 2 + length);
}

module.exports = { uid };
