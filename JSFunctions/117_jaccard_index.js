/**
 * Jaccard Index
 */

/**
 * Calculate Jaccard Similarity Index
 * @param {Array|Set} set1 
 * @param {Array|Set} set2 
 * @returns {number} Similarity (0-1)
 */
function jaccardIndex(set1, set2) {
    const a = new Set(set1);
    const b = new Set(set2);

    const intersection = new Set([...a].filter(x => b.has(x)));
    const union = new Set([...a, ...b]);

    return union.size === 0 ? 0 : intersection.size / union.size;
}

module.exports = { jaccardIndex };
