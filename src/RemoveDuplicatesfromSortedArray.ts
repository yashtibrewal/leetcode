/**
 * To remove the duplicate elements and return the length
 * @param {Array<number>} nums
 * @return {number}
 */
function removeDuplicates(nums: number[]): number {
  if (nums.length===0) {
    return 0;
  }
  const len = nums.length;
  let uniqueCounter = 1;
  let presentNumber = nums[0];
  for (let i=0; i<len; i++) {
    if (presentNumber !== nums[i]) {
      nums[uniqueCounter] = nums[i];
      uniqueCounter++;
      presentNumber = nums[i];
    }
  }
  return uniqueCounter;
};
export default removeDuplicates;
