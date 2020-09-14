/**
 *
 * @param {number[]} nums
 * @return {number}
 */
export function findUnsortedSubarray(nums: number[]): number {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  let flag = false;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i]<nums[i-1]) {
      flag = true;
    }
    if (flag) {
      min = Math.min(min, nums[i]);
    }
  }
  flag = false;
  for (let i = nums.length-2; i >=0; i--) {
    if (nums[i]>nums[i+1]) {
      flag = true;
    }
    if (flag) {
      max = Math.max(max, nums[i]);
    }
  }
  let left=0; let right=nums.length-1;

  while (nums[left]<=min) {
    left++;
  }

  while (nums[right]>=max) {
    right--;
  }
  const result = right - left +1;
  return result>=0?result:0;
}
