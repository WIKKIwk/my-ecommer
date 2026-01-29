/**
 * Disjoint Set (Union-Find)
 */

class DisjointSet {
    constructor(size) {
        this.parent = new Array(size).fill(0).map((_, i) => i);
    }

    find(i) {
        if (this.parent[i] === i) return i;
        return this.find(this.parent[i]);
    }

    union(i, j) {
        const rootI = this.find(i);
        const rootJ = this.find(j);
        if (rootI !== rootJ) {
            this.parent[rootI] = rootJ;
        }
    }
}

module.exports = DisjointSet;
