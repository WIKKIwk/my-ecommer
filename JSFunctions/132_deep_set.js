/**
 * Deep Set Utility
 */

/**
 * Set nested property
 * @param {Object} obj 
 * @param {string|Array} path 
 * @param {*} value 
 * @returns {Object}
 */
function set(obj, path, value) {
  if (!obj) return obj;
  
  const keys = Array.isArray(path) ? path : path.split('.');
  const lastKey = keys.pop();
  let current = obj;
  
  for (const key of keys) {
    if (!current[key]) current[key] = {};
    current = current[key];
  }
  
  current[lastKey] = value;
  return obj;
}

module.exports = { set };
