/**
 * Fibonacci Generator
 */

/**
 * Generate fibonacci sequence
 * @param {number} n Length
 * @returns {Array<number>}
 */
function fibonacciGen(n) {
    const seq = [0, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq.slice(0, n);
}

module.exports = { fibonacciGen };
