/**
 * Async Parallel
 */

/**
 * Run async tasks in parallel
 * @param {Array<Function>} tasks 
 * @returns {Promise<Array>}
 */
function parallel(tasks) {
  return Promise.all(tasks.map(task => task()));
}

module.exports = { parallel };
