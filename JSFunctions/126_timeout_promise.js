/**
 * Timeout Promise
 */

/**
 * Add timeout to promise
 * @param {Promise} promise 
 * @param {number} ms 
 * @returns {Promise}
 */
function timeoutPromise(promise, ms) {
  const timeout = new Promise((_, reject) => {
    const id = setTimeout(() => {
      clearTimeout(id);
      reject(new Error(`Timed out in ${ms}ms.`));
    }, ms);
  });

  return Promise.race([promise, timeout]);
}

module.exports = { timeoutPromise };
