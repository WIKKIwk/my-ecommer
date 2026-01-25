/**
 * Validation utility functions
 */

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

/**
 * Validate URL
 * @param {string} url - URL to validate
 * @returns {boolean} True if valid
 */
function isValidURL(url) {
    const pattern = /^https?:\/\/.+/;
    return pattern.test(url);
}

/**
 * Validate phone number (basic)
 * @param {string} phone - Phone to validate
 * @returns {boolean} True if valid
 */
function isValidPhone(phone) {
    const pattern = /^\+?[\d\s-]{10,}$/;
    return pattern.test(phone);
}

module.exports = { isValidEmail, isValidURL, isValidPhone };
