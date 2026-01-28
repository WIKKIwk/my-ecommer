/**
 * Disjoint Set (Union-Find)
 */

class DisjointSet {
  constructor(size) {
    this.parent = new Array(size).fill(0).map((_, i) => i);
    this.rank = new Array(size).fill(0);
  }

  find(i) {
    if (this.parent[i] !== i) {
      this.parent[i] = this.find(this.parent[i]); // Path compression
    }
    return this.parent[i];
  }

  union(i, j) {
    const rootI = this.find(i);
    const rootJ = this.find(j);

    if (rootI !== rootJ) {
      if (this.rank[rootI] < this.rank[rootJ]) {
        this.parent[rootI] = rootJ;
      } else if (this.rank[rootI] > this.rank[rootJ]) {
        this.parent[rootJ] = rootI;
      } else {
        this.parent[rootI] = rootJ;
        this.rank[rootJ]++;
      }
      return true;
    }
    return false;
  }
}

module.exports = DisjointSet;
