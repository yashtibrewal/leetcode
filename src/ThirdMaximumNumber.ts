/**
 *
 * @param {Arrays<number>} nums
 * @return {number}
 */
export function thirdMax(nums: number[]): number {
  const min = Number.MIN_SAFE_INTEGER;
  const maxs = [min, min, min];
  for (let j=0; j<3; j++) {
    for (let i=0; i<nums.length; i++) {
      if (nums[i]>maxs[0]) {
        maxs[0] = nums[i];
      }
      if (nums[i]>maxs[1] && nums[i] < maxs[0]) {
        maxs[1] = nums[i];
      }
      if (nums[i]>maxs[2] && nums[i] < maxs[1]) {
        maxs[2] = nums[i];
      }
    }
  }
  if (maxs[2]==min) {
    return maxs[0];
  } else {
    return maxs[2];
  }
};
