/**
 * Throttled Queue
 */

class ThrottledQueue {
    constructor(maxRequests, intervalMs) {
        this.maxRequests = maxRequests;
        this.intervalMs = intervalMs;
        this.queue = [];
        this.processed = 0;

        setInterval(() => {
            this.processed = 0;
            this.process();
        }, intervalMs);
    }

    add(fn) {
        return new Promise((resolve, reject) => {
            this.queue.push({ fn, resolve, reject });
            this.process();
        });
    }

    async process() {
        while (this.processed < this.maxRequests && this.queue.length > 0) {
            this.processed++;
            const { fn, resolve, reject } = this.queue.shift();
            try {
                resolve(await fn());
            } catch (e) {
                reject(e);
            }
        }
    }
}

module.exports = ThrottledQueue;
