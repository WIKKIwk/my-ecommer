/**
 * Safe Get Utility
 */

/**
 * Safely access nested property
 * @param {Object} obj 
 * @param {string} path Dot notation
 * @returns {*}
 */
function safeGet(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, obj);
}

module.exports = { safeGet };
