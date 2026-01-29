/**
 * Compose functions
 */

/**
 * Compose functions (executed right-to-left)
 * @param {...Function} fns 
 * @returns {Function}
 */
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

/**
 * Pipe functions (executed left-to-right)
 * @param {...Function} fns 
 * @returns {Function}
 */
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

module.exports = { compose, pipe };
