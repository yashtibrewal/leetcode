/**
 * To remove the duplicate elements and return the length
 * @param {Array<number>} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums: number[], val: number): number {
    if (nums.length===0) {
      return 0;
    }
    const len = nums.length;
    let uniqueCounter = 0;
    for (let i=0; i<len; i++) {
      if (nums[i] !== val) {
        nums[uniqueCounter] = nums[i];
        uniqueCounter++;
      }
    }
    return uniqueCounter;
  };
  export default removeElement;
  