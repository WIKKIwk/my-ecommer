/**
 * Random Color Generator
 */

/**
 * Generate random hex color
 * @returns {string} Hex color
 */
function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

/**
 * Generate random RGB color
 * @returns {string} RGB color
 */
function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return \`rgb(\${r}, \${g}, \${b})\`;
}

module.exports = { getRandomHexColor, getRandomRgbColor };
