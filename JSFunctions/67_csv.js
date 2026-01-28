/**
 * CSV Generator
 */

/**
 * Array of objects to CSV
 * @param {Array} data 
 * @param {Array} columns 
 * @returns {string} CSV string
 */
function toCSV(data, columns = null) {
  if (!data || !data.length) return '';
  
  if (!columns) {
    columns = Object.keys(data[0]);
  }
  
  const header = columns.join(',');
  const rows = data.map(item => {
    return columns.map(col => {
      let val = item[col] === undefined ? '' : item[col];
      if (typeof val === 'string' && (val.includes(',') || val.includes('"') || val.includes('\n'))) {
        val = `"${val.replace(/"/g, '""')}"`;
      }
      return val;
    }).join(',');
  });
  
  return [header, ...rows].join('\n');
}

module.exports = { toCSV };
