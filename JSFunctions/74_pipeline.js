/**
 * Data Pipeline
 */

class Pipeline {
  constructor() {
    this.steps = [];
  }

  step(fn) {
    this.steps.push(fn);
    return this;
  }

  async process(input) {
    let result = input;
    for (const step of this.steps) {
      result = await step(result);
    }
    return result;
  }
}

module.exports = Pipeline;
