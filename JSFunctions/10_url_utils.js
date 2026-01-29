/**
 * URL utility functions
 */

/**
 * Parse URL parameters
 * @param {string} url 
 * @returns {Object} Parameters object
 */
function getQueryParams(url = window.location.href) {
    const params = {};
    new URL(url).searchParams.forEach((val, key) => {
        params[key] = val;
    });
    return params;
}

/**
 * Build URL with query string
 * @param {string} baseUrl 
 * @param {Object} params 
 * @returns {string} Full URL
 */
function buildUrl(baseUrl, params) {
    const url = new URL(baseUrl);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    return url.toString();
}

module.exports = { getQueryParams, buildUrl };
