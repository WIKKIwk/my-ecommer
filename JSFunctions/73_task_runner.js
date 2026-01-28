/**
 * Sequential Task Runner
 */

class TaskRunner {
  constructor() {
    this.queue = [];
    this.running = false;
  }

  add(task) {
    this.queue.push(task);
    this.run();
  }

  async run() {
    if (this.running || this.queue.length === 0) return;
    
    this.running = true;
    const task = this.queue.shift();
    
    try {
      await task();
    } catch (e) {
      console.error('Task failed', e);
    } finally {
      this.running = false;
      this.run();
    }
  }
}

module.exports = TaskRunner;
