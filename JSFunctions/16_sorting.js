/**
 * Sorting Algorithms
 */

/**
 * Bubble Sort
 * @param {Array} arr 
 * @returns {Array} Sorted array
 */
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

/**
 * Quick Sort
 * @param {Array} arr 
 * @returns {Array} Sorted array
 */
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports = { bubbleSort, quickSort };
