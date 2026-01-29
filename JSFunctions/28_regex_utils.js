/**
 * Regex patterns
 */

const patterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
    hexColor: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
    slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
};

/**
 * Match string against pattern
 * @param {string} str 
 * @param {string} type 
 * @returns {boolean}
 */
function matchPattern(str, type) {
    if (patterns[type]) {
        return patterns[type].test(str);
    }
    return false;
}

module.exports = { patterns, matchPattern };
