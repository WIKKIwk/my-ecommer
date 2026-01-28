/**
 * Simple Ray Caster Utility
 */

/**
 * Check if ray intersects circle
 * @param {Object} ray 
 * @param {Object} circle 
 * @returns {boolean}
 */
function rayIntersectsCircle(ray, circle) {
  const dx = ray.origin.x - circle.x;
  const dy = ray.origin.y - circle.y;
  const a = ray.dir.x**2 + ray.dir.y**2;
  const b = 2 * (dx * ray.dir.x + dy * ray.dir.y);
  const c = dx**2 + dy**2 - circle.r**2;
  const discriminant = b**2 - 4 * a * c;
  return discriminant >= 0;
}

module.exports = { rayIntersectsCircle };
