/**
 * Simple Recursive Merge
 */

/**
 * Merge objects recursively
 * @param {Object} target 
 * @param {Object} source 
 * @returns {Object}
 */
function mergeRecursive(target, source) {
  for (const key in source) {
    if (source[key] instanceof Object && source[key] !== null) {
      Object.assign(source[key], mergeRecursive(target[key], source[key]));
    }
  }
  Object.assign(target || {}, source);
  return target;
}

module.exports = { mergeRecursive };
