/**
 * Mode Utility
 */

/**
 * Calculate mode
 * @param {Array<number>} data 
 * @returns {Array<number>} Array of mode(s)
 */
function mode(data) {
    if (!data || data.length === 0) return [];

    const counts = {};
    let maxFreq = 0;

    data.forEach(val => {
        counts[val] = (counts[val] || 0) + 1;
        if (counts[val] > maxFreq) maxFreq = counts[val];
    });

    return Object.keys(counts)
        .filter(key => counts[key] === maxFreq)
        .map(Number);
}

module.exports = { mode };
