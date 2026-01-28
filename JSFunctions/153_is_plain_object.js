/**
 * Is Plain Object Utility
 */

/**
 * Check if value is a plain object
 * @param {*} value 
 * @returns {boolean}
 */
function isPlainObject(value) {
  if (typeof value !== 'object' || value === null) return false;
  
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
}

module.exports = { isPlainObject };
