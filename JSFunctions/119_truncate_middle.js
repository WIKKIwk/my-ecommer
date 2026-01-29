/**
 * Truncate Middle Utility
 */

/**
 * Truncate string in the middle
 * @param {string} str 
 * @param {number} length 
 * @param {string} ellipsis 
 * @returns {string} Truncated string
 */
function truncateMiddle(str, length, ellipsis = '...') {
    if (str.length <= length) return str;
    const partLength = Math.ceil((length - ellipsis.length) / 2);
    return str.slice(0, partLength) + ellipsis + str.slice(-partLength);
}

module.exports = { truncateMiddle };
