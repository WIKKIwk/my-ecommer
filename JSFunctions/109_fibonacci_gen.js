/**
 * Fibonacci Generator
 */

/**
 * Fibonacci sequence generator
 * @param {number} limit 
 */
function* fibonacciGenerator(limit = Infinity) {
  let prev = 0, curr = 1;
  yield prev;
  if (limit > 0) yield curr;
  
  let count = 2;
  while (count <= limit) {
    const next = prev + curr;
    yield next;
    prev = curr;
    curr = next;
    count++;
  }
}

module.exports = { fibonacciGenerator };
