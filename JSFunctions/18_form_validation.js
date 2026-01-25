/**
 * Form validation utilities
 */

/**
 * Validate required field
 * @param {string} value - Field value
 * @returns {boolean} True if valid
 */
function isRequired(value) {
    return value !== null && value !== undefined && value.trim() !== '';
}

/**
 * Validate minimum length
 * @param {string} value - Field value
 * @param {number} min - Minimum length
 * @returns {boolean} True if valid
 */
function minLength(value, min) {
    return value.length >= min;
}

/**
 * Validate maximum length
 * @param {string} value - Field value
 * @param {number} max - Maximum length
 * @returns {boolean} True if valid
 */
function maxLength(value, max) {
    return value.length <= max;
}

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {Object} Validation result with strength
 */
function validatePassword(password) {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);
    const lengthOk = password.length >= 8;

    const score = [hasUpper, hasLower, hasNumber, hasSpecial, lengthOk].filter(Boolean).length;
    const strength = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong'][score];

    return { valid: score >= 3, strength, score };
}

module.exports = { isRequired, minLength, maxLength, validatePassword };
