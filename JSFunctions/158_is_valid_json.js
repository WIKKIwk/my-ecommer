/**
 * Is Valid JSON
 */

/**
 * Check if string is valid JSON
 * @param {string} str 
 * @returns {boolean}
 */
function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = { isValidJSON };
