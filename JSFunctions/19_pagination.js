/**
 * Pagination utilities
 */

/**
 * Paginate array
 * @param {Array} items - Items to paginate
 * @param {number} page - Current page (1-indexed)
 * @param {number} perPage - Items per page
 * @returns {Object} Pagination result
 */
function paginate(items, page, perPage) {
    const total = items.length;
    const totalPages = Math.ceil(total / perPage);
    const start = (page - 1) * perPage;
    const end = start + perPage;

    return {
        items: items.slice(start, end),
        page,
        perPage,
        total,
        totalPages,
        hasPrev: page > 1,
        hasNext: page < totalPages
    };
}

/**
 * Get page numbers for pagination UI
 * @param {number} currentPage - Current page
 * @param {number} totalPages - Total pages
 * @param {number} maxDisplayed - Max pages to display
 * @returns {Array} Page numbers
 */
function getPageNumbers(currentPage, totalPages, maxDisplayed = 5) {
    const half = Math.floor(maxDisplayed / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxDisplayed - 1);
    start = Math.max(1, end - maxDisplayed + 1);

    const pages = [];
    for (let i = start; i <= end; i++) {
        pages.push(i);
    }
    return pages;
}

module.exports = { paginate, getPageNumbers };
