/**
 * Strip Tags Utility
 */

/**
 * Remove HTML tags from string
 * @param {string} html 
 * @returns {string} Plain text
 */
function stripTags(html) {
  return html.replace(/<[^>]*>?/gm, '');
}

module.exports = { stripTags };
