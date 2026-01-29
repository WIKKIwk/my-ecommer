/**
 * Deep Clone Utility
 */

/**
 * Deep clone value
 * @param {*} value 
 * @returns {*} Cloned value
 */
function deepClone(value) {
    if (value === null || typeof value !== 'object') {
        return value;
    }

    if (value instanceof Date) {
        return new Date(value.getTime());
    }

    if (Array.isArray(value)) {
        return value.map(item => deepClone(item));
    }

    if (value instanceof Map) {
        return new Map(Array.from(value.entries()).map(([k, v]) => [k, deepClone(v)]));
    }

    if (value instanceof Set) {
        return new Set(Array.from(value).map(v => deepClone(v)));
    }

    // Handle Object
    const cloned = {};
    for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
            cloned[key] = deepClone(value[key]);
        }
    }
    return cloned;
}

module.exports = { deepClone };
