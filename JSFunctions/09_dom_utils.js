/**
 * DOM utility functions
 */

/**
 * Select single element
 * @param {string} selector 
 * @param {Element} scope 
 * @returns {Element}
 */
function $(selector, scope = document) {
    return scope.querySelector(selector);
}

/**
 * Select multiple elements
 * @param {string} selector 
 * @param {Element} scope 
 * @returns {NodeList}
 */
function $$(selector, scope = document) {
    return scope.querySelectorAll(selector);
}

/**
 * Add event listener
 * @param {Element} element 
 * @param {string} event 
 * @param {Function} handler 
 */
function on(element, event, handler) {
    element.addEventListener(event, handler);
}

module.exports = { $, $$, on };
