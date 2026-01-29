/**
 * Timeout Promise
 */

/**
 * Add timeout to a promise
 * @param {Promise} promise 
 * @param {number} ms 
 * @returns {Promise}
 */
function timeoutPromise(promise, ms) {
    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Promise timed out')), ms);
    });
    return Promise.race([promise, timeout]);
}

module.exports = { timeoutPromise };
