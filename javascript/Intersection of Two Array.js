/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    nums1 = nums1.sort((a, b) => a - b);
    nums2 = nums2.sort((a, b) => a - b);
    const result = [];
    let j = 0;
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] == nums2[j]) {
            result.push(nums1[i]);
            j++;
        } else {
            if (nums2[j] > nums1[i]) {
                continue;
            } else {
                while (nums2[j] < nums1[i])
                    j++;
                if (nums2[j] == nums1[i]) {
                    result.push(nums1[i]);
                    j++;
                }
            }
        }
    }
    return result;
};

console.log(intersect([1,2,2,1],[2,2]));