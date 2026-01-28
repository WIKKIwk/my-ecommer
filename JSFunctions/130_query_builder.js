/**
 * Advanced Query Builder
 */

/**
 * Build query string nested
 * @param {Object} params 
 * @param {string} prefix 
 * @returns {string}
 */
function buildQueryNested(params, prefix) {
  const query = [];
  
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const k = prefix ? `${prefix}[${key}]` : key;
      const v = params[key];
      
      if (v !== null && typeof v === 'object') {
        query.push(buildQueryNested(v, k));
      } else {
        query.push(`${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
      }
    }
  }
  
  return query.join('&');
}

module.exports = { buildQueryNested };
