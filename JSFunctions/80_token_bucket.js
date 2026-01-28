/**
 * Token Bucket Rate Limiter
 */

class TokenBucket {
  constructor(capacity, fillRate) {
    this.capacity = capacity;
    this.tokens = capacity;
    this.fillRate = fillRate; // tokens per second
    this.lastFill = Date.now();
  }

  refill() {
    const now = Date.now();
    const elapsed = (now - this.lastFill) / 1000;
    this.tokens = Math.min(this.capacity, this.tokens + (elapsed * this.fillRate));
    this.lastFill = now;
  }

  consume(tokens = 1) {
    this.refill();
    if (this.tokens >= tokens) {
      this.tokens -= tokens;
      return true;
    }
    return false;
  }
}

module.exports = TokenBucket;
