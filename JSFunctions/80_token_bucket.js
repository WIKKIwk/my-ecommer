/**
 * Token Bucket
 */

class TokenBucket {
    constructor(capacity, fillRate) {
        this.capacity = capacity;
        this.tokens = capacity;
        this.fillRate = fillRate; // tokens per second
        this.lastRefill = Date.now();
    }

    refill() {
        const now = Date.now();
        const elapsed = (now - this.lastRefill) / 1000;
        const tokensToAdd = elapsed * this.fillRate;

        this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);
        this.lastRefill = now;
    }

    tryConsume(amount = 1) {
        this.refill();
        if (this.tokens >= amount) {
            this.tokens -= amount;
            return true;
        }
        return false;
    }
}

module.exports = TokenBucket;
