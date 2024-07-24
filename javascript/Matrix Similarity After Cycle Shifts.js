/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function (mat, k) {
    if (mat[0].length % k == 0 && k > mat[0].length) return true;

    let len = mat[0].length;
    k = k % len;
    let flip = true;
    for (let row of mat) {
        const rowCopy = [];
        if (flip) {
            // shift left k times
            rowCopy.push(...row.slice(k, len));
            rowCopy.push(...row.slice(0, k));
        } else {
            // shift right k times
            rowCopy.push(...row.slice(len - k, len));
            rowCopy.push(...row.slice(0, len - k));
        }
        // if post comuptation, rows are not same, return false
        // console.log(row, rowCopy);
        for (let i = 0; i < len; i++) {
            if (rowCopy[i] !== row[i]) return false;
        }
        flip = !flip;
    }

    return true;
};

console.log(areSimilar([[1, 2]], 1));