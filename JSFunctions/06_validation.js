/**
 * Validation utility functions
 */

/**
 * Validate email address
 * @param {string} email 
 * @returns {boolean} True if valid
 */
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Validate URL
 * @param {string} url 
 * @returns {boolean} True if valid
 */
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
}

/**
 * Validate phone number (simple)
 * @param {string} phone 
 * @returns {boolean} True if valid
 */
function isValidPhone(phone) {
    const re = /^\+?[\d\s-]{10,}$/;
    return re.test(phone);
}

module.exports = { isValidEmail, isValidUrl, isValidPhone };
