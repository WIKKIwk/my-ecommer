/**
 * Case Type Converters
 */

/**
 * To Dot Case
 * @param {string} str 
 * @returns {string}
 */
function toDotCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1.$2').replace(/[\s_]+/g, '.').toLowerCase();
}

/**
 * To Path Case
 * @param {string} str 
 * @returns {string}
 */
function toPathCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1/$2').replace(/[\s_]+/g, '/').toLowerCase();
}

/**
 * To Constant Case
 * @param {string} str 
 * @returns {string}
 */
function toConstantCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1_$2').replace(/[\s-]+/g, '_').toUpperCase();
}

module.exports = { toDotCase, toPathCase, toConstantCase };
