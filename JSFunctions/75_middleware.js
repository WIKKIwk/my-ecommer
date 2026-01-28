/**
 * Middleware Pattern
 */

class Middleware {
  constructor() {
    this.middlewares = [];
  }

  use(fn) {
    this.middlewares.push(fn);
  }

  async execute(context) {
    let index = -1;
    
    const next = async () => {
      index++;
      if (index < this.middlewares.length) {
        await this.middlewares[index](context, next);
      }
    };

    await next();
  }
}

module.exports = Middleware;
