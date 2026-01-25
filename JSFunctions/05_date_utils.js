/**
 * Date utility functions
 */

/**
 * Format date to YYYY-MM-DD
 * @param {Date} date - Date to format
 * @returns {string} Formatted date
 */
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Add days to date
 * @param {Date} date - Starting date
 * @param {number} days - Days to add
 * @returns {Date} New date
 */
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

/**
 * Get days between two dates
 * @param {Date} date1 - First date
 * @param {Date} date2 - Second date
 * @returns {number} Days between
 */
function daysBetween(date1, date2) {
    const diff = Math.abs(date2 - date1);
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

module.exports = { formatDate, addDays, daysBetween };
