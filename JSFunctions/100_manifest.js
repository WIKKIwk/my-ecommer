/**
 * Manifest of all function files
 */

const fs = require('fs');
const path = require('path');

function listFunctions() {
  const dir = __dirname;
  return fs.readdirSync(dir)
    .filter(file => file.endsWith('.js') && file !== '100_manifest.js');
}

console.log('JS Functions Library Manifest:');
console.log(listFunctions().join('\n'));

module.exports = { listFunctions };
