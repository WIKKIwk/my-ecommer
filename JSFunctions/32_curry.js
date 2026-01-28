/**
 * Currying utility
 */

/**
 * Curry function
 * @param {Function} fn 
 * @returns {Function}
 */
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...moreArgs) {
        return curried.apply(this, args.concat(moreArgs));
      }
    }
  }
}

module.exports = { curry };
