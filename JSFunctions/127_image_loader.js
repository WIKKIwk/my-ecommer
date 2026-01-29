/**
 * Image Loader
 */

/**
 * Load image async
 * @param {string} src 
 * @returns {Promise<HTMLImageElement>}
 */
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

/**
 * Preload multiple images
 * @param {Array<string>} sources 
 * @returns {Promise<Array>}
 */
function preloadImages(sources) {
    return Promise.all(sources.map(loadImage));
}

module.exports = { loadImage, preloadImages };
