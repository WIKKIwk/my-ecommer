/**
 * LocalStorage utility functions
 */

/**
 * Set item in localStorage
 * @param {string} key 
 * @param {*} value 
 */
function setItem(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error('Error saving to localStorage', e);
    }
}

/**
 * Get item from localStorage
 * @param {string} key 
 * @returns {*} Value or null
 */
function getItem(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (e) {
        console.error('Error reading from localStorage', e);
        return null;
    }
}

/**
 * Remove item from localStorage
 * @param {string} key 
 */
function removeItem(key) {
    localStorage.removeItem(key);
}

module.exports = { setItem, getItem, removeItem };
