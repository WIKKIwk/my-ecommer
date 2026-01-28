/**
 * Complex Number Math
 */

class Complex {
  constructor(re, im) {
    this.re = re;
    this.im = im;
  }

  add(other) {
    return new Complex(this.re + other.re, this.im + other.im);
  }

  mult(other) {
    return new Complex(
      this.re * other.re - this.im * other.im,
      this.re * other.im + this.im * other.re
    );
  }

  mag() {
    return Math.sqrt(this.re * this.re + this.im * this.im);
  }
}

module.exports = Complex;
