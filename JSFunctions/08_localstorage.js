/**
 * Local storage utilities
 */

/**
 * Set item in localStorage with JSON serialization
 * @param {string} key - Storage key
 * @param {*} value - Value to store
 */
function setLocal(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

/**
 * Get item from localStorage with JSON parsing
 * @param {string} key - Storage key
 * @returns {*} Stored value or null
 */
function getLocal(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return null;
    }
}

/**
 * Remove item from localStorage
 * @param {string} key - Storage key
 */
function removeLocal(key) {
    localStorage.removeItem(key);
}

module.exports = { setLocal, getLocal, removeLocal };
