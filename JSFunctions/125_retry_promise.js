/**
 * Retry Promise
 */

/**
 * Retry promise with delay
 * @param {Function} fn 
 * @param {number} retries 
 * @param {number} delay 
 * @returns {Promise}
 */
function retryPromise(fn, retries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        if (retries === 0) {
          reject(error);
          return;
        }
        setTimeout(() => {
          retryPromise(fn, retries - 1, delay).then(resolve).catch(reject);
        }, delay);
      });
  });
}

module.exports = { retryPromise };
