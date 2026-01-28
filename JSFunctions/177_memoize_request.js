/**
 * Request Memoization (Deduplication)
 */

const pending = new Map();

/**
 * Memoize async request by key
 * @param {string} key 
 * @param {Function} fn 
 * @returns {Promise}
 */
function memoizeRequest(key, fn) {
  if (pending.has(key)) {
    return pending.get(key);
  }
  
  const promise = fn().finally(() => {
    pending.delete(key);
  });
  
  pending.set(key, promise);
  return promise;
}

module.exports = { memoizeRequest };
