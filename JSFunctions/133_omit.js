/**
 * Object Omit Utility
 */

/**
 * Omit keys from object
 * @param {Object} obj 
 * @param {Array<string>} keys 
 * @returns {Object}
 */
function omit(obj, keys) {
  if (!obj) return {};
  
  const result = { ...obj };
  keys.forEach(key => delete result[key]);
  return result;
}

module.exports = { omit };
