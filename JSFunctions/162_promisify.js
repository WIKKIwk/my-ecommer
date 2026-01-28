/**
 * Promisify Utility
 */

/**
 * Convert callback-style function to promise
 * @param {Function} fn 
 * @returns {Function}
 */
function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  }
}

module.exports = { promisify };
