/**
 * Custom Set Implementation
 */

class CustomSet {
  constructor() {
    this.items = {};
  }

  has(value) {
    return Object.prototype.hasOwnProperty.call(this.items, value);
  }

  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }

  delete(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.keys(this.items);
  }
}

module.exports = CustomSet;
