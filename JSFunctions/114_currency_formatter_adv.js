/**
 * Advanced Currency Formatter
 */

/**
 * Format currency with locale options
 * @param {number} amount 
 * @param {string} currencyCode 
 * @param {string} locale 
 * @returns {string}
 */
function formatCurrency(amount, currencyCode = 'USD', locale = 'en-US') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

module.exports = { formatCurrency };
