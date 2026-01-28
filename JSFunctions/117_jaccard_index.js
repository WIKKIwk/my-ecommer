/**
 * Jaccard Index (Similarity)
 */

/**
 * Calculate Jaccard similarity index
 * @param {string|Array} a 
 * @param {string|Array} b 
 * @returns {number}
 */
function jaccard(a, b) {
  const setA = new Set(a);
  const setB = new Set(b);
  
  const intersection = new Set([...setA].filter(x => setB.has(x)));
  const union = new Set([...setA, ...setB]);
  
  return intersection.size / union.size;
}

module.exports = { jaccard };
