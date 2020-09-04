'use strict';
/**
 * https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/552/week-4-august-22nd-august-28th/3438/
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
    let result = [], found, j, jump, len = intervals.length,x,y,diff;
    for (let i = 0; i < len; i++) {
        found = -1, j = 0, jump = Number.MAX_SAFE_INTEGER;
        y = intervals[i][1];
        for (; j < len; j++) {
            x = intervals[j][0];
            diff = x -y;
            if ( diff<= jump && diff >= 0) {
                found = j;
                jump = diff;
            }
        }
        result.push(found);
    }
    return result;
};

console.log(findRightInterval([[1, 2], [2, 3], [0, 1], [3, 4]]));