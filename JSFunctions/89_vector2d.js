/**
 * Vector 2D Math
 */

class Vector2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    return new Vector2D(this.x + v.x, this.y + v.y);
  }

  sub(v) {
    return new Vector2D(this.x - v.x, this.y - v.y);
  }

  mult(n) {
    return new Vector2D(this.x * n, this.y * n);
  }

  div(n) {
    if (n === 0) return new Vector2D(0, 0);
    return new Vector2D(this.x / n, this.y / n);
  }

  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize() {
    const m = this.mag();
    if (m !== 0) return this.div(m);
    return new Vector2D(0, 0);
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }
}

module.exports = Vector2D;
