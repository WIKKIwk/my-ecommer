/**
 * Matrix Math
 */

class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = Array(rows).fill().map(() => Array(cols).fill(0));
  }

  static fromArray(arr) {
    const m = new Matrix(arr.length, 1);
    m.map((val, i) => arr[i]);
    return m;
  }

  toArray() {
    let arr = [];
    this.map((val) => arr.push(val));
    return arr;
  }

  map(func) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const val = this.data[i][j];
        this.data[i][j] = func(val, i, j);
      }
    }
    return this;
  }

  add(n) {
    if (n instanceof Matrix) {
      if (this.rows !== n.rows || this.cols !== n.cols) return;
      return this.map((val, i, j) => val + n.data[i][j]);
    } else {
      return this.map(val => val + n);
    }
  }

  multiply(n) {
    if (n instanceof Matrix) {
      if (this.rows !== n.rows || this.cols !== n.cols) return;
      return this.map((val, i, j) => val * n.data[i][j]);
    } else {
      return this.map(val => val * n);
    }
  }
}

module.exports = Matrix;
