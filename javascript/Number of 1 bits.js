// https://leetcode.com/problems/number-of-1-bits/

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    return n.toString(2).replaceAll("0","").length;
};
console.log(hammingWeight(128));