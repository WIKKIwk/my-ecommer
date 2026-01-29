/**
 * Prime Generator
 */

/**
 * Generate primes up to n
 * @param {number} n 
 * @returns {Array<number>}
 */
function primeGen(n) {
    const primes = [];
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let p = 2; p * p <= n; p++) {
        if (isPrime[p]) {
            for (let i = p * p; i <= n; i += p)
                isPrime[i] = false;
        }
    }

    for (let p = 2; p <= n; p++) {
        if (isPrime[p]) primes.push(p);
    }
    return primes;
}

module.exports = { primeGen };
