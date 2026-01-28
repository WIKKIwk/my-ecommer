/**
 * Quaternion Math
 */

class Quaternion {
  constructor(w, x, y, z) {
    this.w = w;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  mult(q) {
    return new Quaternion(
      this.w*q.w - this.x*q.x - this.y*q.y - this.z*q.z,
      this.w*q.x + this.x*q.w + this.y*q.z - this.z*q.y,
      this.w*q.y - this.x*q.z + this.y*q.w + this.z*q.x,
      this.w*q.z + this.x*q.y - this.y*q.x + this.z*q.w
    );
  }

  normalize() {
    const mag = Math.sqrt(this.w**2 + this.x**2 + this.y**2 + this.z**2);
    return new Quaternion(this.w/mag, this.x/mag, this.y/mag, this.z/mag);
  }
}

module.exports = Quaternion;
