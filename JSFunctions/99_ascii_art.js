/**
 * ASCII Art Generator (Simple)
 */

/**
 * Generate simple ASCII box
 * @param {string} text 
 * @returns {string} ASCII art
 */
function asciiBox(text) {
    const len = text.length;
    const line = '+' + '-'.repeat(len + 2) + '+';
    return \`\${line}\n| \${text} |\n\${line}\`;
}

module.exports = { asciiBox };
