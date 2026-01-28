/**
 * Truncate Middle
 */

/**
 * Truncate string in the middle
 * @param {string} str 
 * @param {number} len 
 * @returns {string}
 */
function truncateMiddle(str, len) {
  if (!str || str.length <= len) return str;
  
  const sep = '...';
  const charsToShow = len - sep.length;
  const frontChars = Math.ceil(charsToShow / 2);
  const backChars = Math.floor(charsToShow / 2);
  
  return str.substr(0, frontChars) + sep + str.substr(str.length - backChars);
}

module.exports = { truncateMiddle };
