/**
 * Pagination Utility
 */

/**
 * Paginate array
 * @param {Array} items 
 * @param {number} page 
 * @param {number} perPage 
 * @returns {Object} Pagination result
 */
function paginate(items, page = 1, perPage = 10) {
    const offset = (page - 1) * perPage;
    const paginatedItems = items.slice(offset, offset + perPage);
    const totalPages = Math.ceil(items.length / perPage);

    return {
        page,
        perPage,
        pre_page: page - 1 ? page - 1 : null,
        next_page: (totalPages > page) ? page + 1 : null,
        total: items.length,
        totalPages,
        data: paginatedItems
    };
}

module.exports = { paginate };
