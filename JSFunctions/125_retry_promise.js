/**
 * Retry Promise
 */

/**
 * Retry a promise-returning function
 * @param {Function} fn 
 * @param {number} retries 
 * @param {number} delay 
 * @returns {Promise}
 */
async function retryPromise(fn, retries = 3, delay = 1000) {
    try {
        return await fn();
    } catch (err) {
        if (retries <= 0) throw err;
        await new Promise(resolve => setTimeout(resolve, delay));
        return retryPromise(fn, retries - 1, delay);
    }
}

module.exports = { retryPromise };
