/**
 * Is Empty Utility
 */

/**
 * Check if value is empty (string, array, object, map, set)
 * @param {*} value 
 * @returns {boolean}
 */
function isEmpty(value) {
  if (value == null) return true;
  if (Array.isArray(value) || typeof value === 'string') return value.length === 0;
  if (value instanceof Map || value instanceof Set) return value.size === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

module.exports = { isEmpty };
