/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function (mapping, nums) {

    // Lets map the nums to required mapping

    function resolveMap(num) {
        const array = num.toString().split("").map(digit => mapping[digit]);
        return parseInt(array.join(""));
    }

    const mappedNums = nums.map(num => resolveMap(num));

    let keyValues = [];

    for(let i=0;i<nums.length;i++){
        keyValues.push([mappedNums[i],nums[i]]);
    }

    // stable sort

    keyValues.sort((a,b)=>a[0]-b[0]);

    for(let i=0;i<keyValues.length;i++){
        keyValues[i] = keyValues[i][1];
    }

    return keyValues;

};

console.log(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38]));