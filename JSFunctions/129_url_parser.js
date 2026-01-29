/**
 * URL Parser
 */

/**
 * Parse URL components
 * @param {string} url 
 * @returns {Object} Parsed components
 */
function parseUrl(url) {
    try {
        const parsed = new URL(url);
        const params = {};
        parsed.searchParams.forEach((val, key) => params[key] = val);

        return {
            protocol: parsed.protocol,
            host: parsed.host,
            hostname: parsed.hostname,
            port: parsed.port,
            pathname: parsed.pathname,
            search: parsed.search,
            hash: parsed.hash,
            params: params
        };
    } catch (e) {
        return null;
    }
}

module.exports = { parseUrl };
