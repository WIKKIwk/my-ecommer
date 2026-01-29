/**
 * Debounce Promise
 */

/**
 * Debounce a function that returns a promise
 * @param {Function} fn 
 * @param {number} wait 
 * @returns {Function}
 */
function debouncePromise(fn, wait) {
    let timeout;
    let pendingPromise;

    return function (...args) {
        return new Promise((resolve, reject) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                pendingPromise = fn.apply(this, args);
                Promise.resolve(pendingPromise).then(resolve).catch(reject);
            }, wait);
        });
    }
}

module.exports = { debouncePromise };
