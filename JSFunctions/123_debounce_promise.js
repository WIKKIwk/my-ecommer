/**
 * Debounce Promise
 */

/**
 * Debounce async function
 * @param {Function} fn 
 * @param {number} wait 
 * @returns {Function}
 */
function debouncePromise(fn, wait) {
  let timer = null;
  let resolves = [];
  
  return function(...args) {
    clearTimeout(timer);
    
    return new Promise((resolve) => {
      resolves.push(resolve);
      
      timer = setTimeout(() => {
        const result = fn.apply(this, args);
        resolves.forEach(r => r(result));
        resolves = [];
      }, wait);
    });
  }
}

module.exports = { debouncePromise };
