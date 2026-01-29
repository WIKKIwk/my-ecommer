/**
 * Collision Detection
 */

/**
 * Circle-Circle Collision
 * @param {Object} c1 {x,y,r}
 * @param {Object} c2 {x,y,r}
 * @returns {boolean}
 */
function circleCollision(c1, c2) {
    const dx = c1.x - c2.x;
    const dy = c1.y - c2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < c1.r + c2.r;
}

/**
 * Rect-Rect Collision
 * @param {Object} r1 {x,y,w,h}
 * @param {Object} r2 {x,y,w,h}
 * @returns {boolean}
 */
function rectCollision(r1, r2) {
    return (
        r1.x < r2.x + r2.w &&
        r1.x + r1.w > r2.x &&
        r1.y < r2.y + r2.h &&
        r1.y + r1.h > r2.y
    );
}

module.exports = { circleCollision, rectCollision };
