/**
 * Query Builder
 */

/**
 * Build query string from object
 * @param {Object} params 
 * @param {string} prefix 
 * @returns {string} Query string
 */
function buildQuery(params, prefix = '') {
    const query = Object.keys(params).map(key => {
        const value = params[key];
        const encodedKey = prefix ?\`\${prefix}[\${encodeURIComponent(key)}]\` : encodeURIComponent(key);
    
    if (typeof value === 'object' && value !== null) {
      return buildQuery(value, encodedKey);
    } else {
      return \`\${encodedKey}=\${encodeURIComponent(value)}\`;
    }
  });
  
  return query.join('&');
}

module.exports = { buildQuery };
