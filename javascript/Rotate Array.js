/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    nums.push(...[...nums.slice(nums.length-k, nums.length),...nums.slice(0,nums.length-k)]);
    nums.splice(0,nums.length/2);
    nums.flat();
};

const input = [1,2,3,4,5,6,7];
rotate(input,3)
console.log(input);