/**
 * Collision Detection
 */

/**
 * Check Circle Collision
 * @param {Object} c1 
 * @param {Object} c2 
 * @returns {boolean}
 */
function checkCircleCollision(c1, c2) {
  const dx = c1.x - c2.x;
  const dy = c1.y - c2.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < c1.r + c2.r;
}

/**
 * Check AABB (Rectangle) Collision
 * @param {Object} r1 
 * @param {Object} r2 
 * @returns {boolean}
 */
function checkRectCollision(r1, r2) {
  return (
    r1.x < r2.x + r2.w &&
    r1.x + r1.w > r2.x &&
    r1.y < r2.y + r2.h &&
    r1.h + r1.y > r2.y
  );
}

module.exports = { checkCircleCollision, checkRectCollision };
