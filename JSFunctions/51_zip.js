/**
 * Zip Utility
 */

/**
 * Zip arrays together
 * @param {...Array} arrays 
 * @returns {Array} Array of tuples
 */
function zip(...arrays) {
    const minLength = Math.min(...arrays.map(arr => arr.length));
    const result = [];

    for (let i = 0; i < minLength; i++) {
        result.push(arrays.map(arr => arr[i]));
    }

    return result;
}

module.exports = { zip };
