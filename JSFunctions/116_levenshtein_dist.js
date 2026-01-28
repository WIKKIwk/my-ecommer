/**
 * Levenshtein Distance
 */

/**
 * Calculate Levenshtein distance
 * @param {string} a 
 * @param {string} b 
 * @returns {number}
 */
function levenshtein(a, b) {
  const tmp = [];
  let i, j, alen = a.length, blen = b.length;

  for (i = 0; i <= alen; i++) tmp[i] = [i];
  for (j = 0; j <= blen; j++) tmp[0][j] = j;

  for (i = 1; i <= alen; i++) {
    for (j = 1; j <= blen; j++) {
      tmp[i][j] = Math.min(
        tmp[i-1][j] + 1, 
        tmp[i][j-1] + 1, 
        tmp[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1)
      );
    }
  }
  return tmp[alen][blen];
}

module.exports = { levenshtein };
