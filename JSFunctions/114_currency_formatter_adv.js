/**
 * Advanced Currency Formatter
 */

/**
 * Format currency with locale
 * @param {number} amount 
 * @param {string} currencyCode 
 * @param {string} locale 
 * @returns {string}
 */
function formatCurrencyAdv(amount, currencyCode = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}

module.exports = { formatCurrencyAdv };
