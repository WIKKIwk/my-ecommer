/**
 * Retry with Exponential Backoff
 */

const wait = ms => new Promise(r => setTimeout(r, ms));

/**
 * Retry function with backoff
 * @param {Function} fn 
 * @param {number} retries 
 * @param {number} delay 
 * @returns {Promise}
 */
async function retryWithBackoff(fn, retries = 3, delay = 1000) {
    try {
        return await fn();
    } catch (err) {
        if (retries === 0) throw err;
        await wait(delay);
        return retryWithBackoff(fn, retries - 1, delay * 2);
    }
}

module.exports = { retryWithBackoff };
