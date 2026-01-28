/**
 * Number to Words (Simplified)
 */

/**
 * Convert number to words (up to 999)
 * @param {number} n 
 * @returns {string}
 */
function numberToWords(n) {
  if (n < 0 || n > 999) return 'Number out of range';
  if (n === 0) return 'zero';

  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let words = '';

  if (n >= 100) {
    words += units[Math.floor(n / 100)] + ' hundred';
    n %= 100;
    if (n > 0) words += ' and ';
  }

  if (n >= 20) {
    words += tens[Math.floor(n / 10)];
    n %= 10;
    if (n > 0) words += '-' + units[n];
  } else if (n >= 10) {
    words += teens[n - 10];
  } else if (n > 0) {
    words += units[n];
  }

  return words;
}

module.exports = { numberToWords };
