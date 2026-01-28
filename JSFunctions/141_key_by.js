/**
 * KeyBy Utility
 */

/**
 * Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
 * @param {Array} array 
 * @param {string|Function} key 
 * @returns {Object}
 */
function keyBy(array, key) {
  return (array || []).reduce((result, item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    result[k] = item;
    return result;
  }, {});
}

module.exports = { keyBy };
