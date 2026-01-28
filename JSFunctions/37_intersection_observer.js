/**
 * Intersection Observer Helper
 */

/**
 * Observe visibility of an element
 * @param {Element} element 
 * @param {Function} callback 
 * @param {Object} options 
 * @returns {IntersectionObserver}
 */
function observeVisibility(element, callback, options = {}) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      callback(entry.isIntersecting, entry);
    });
  }, options);
  
  observer.observe(element);
  return observer;
}

module.exports = { observeVisibility };
