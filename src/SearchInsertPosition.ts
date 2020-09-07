/**
 *
 * @param {[number]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums: number[], target: number): number {
  const length = nums.length;
  for (let i=0; i<length; i++) {
    if (nums[i]>=target) {
      return i;
    }
  }
  return length;
};

export default searchInsert;
