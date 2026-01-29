/**
 * Type checking utilities
 */

/**
 * Get type of value
 * @param {*} value 
 * @returns {string} Type
 */
function getType(value) {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

/**
 * Check if value is number
 * @param {*} value 
 * @returns {boolean}
 */
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

/**
 * Check if value is string
 * @param {*} value 
 * @returns {boolean}
 */
function isString(value) {
    return typeof value === 'string';
}

/**
 * Check if value is array
 * @param {*} value 
 * @returns {boolean}
 */
function isArray(value) {
    return Array.isArray(value);
}

/**
 * Check if value is object (non-null)
 * @param {*} value 
 * @returns {boolean}
 */
function isObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

module.exports = { getType, isNumber, isString, isArray, isObject };
