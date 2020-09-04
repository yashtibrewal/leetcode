nums = [2,7,11,15];
target = 9;

var twoSum = function(nums, target) {
    /*
        process nums
            if 
                element exists as key and index as value break
            else
                element store compliment of the num's target to key 
    */
   let len = nums.length, hash = {};
   for(let i=0;i<len;i++){
        let num = nums[i];
        if(num>target)
            continue;
        if(hash[num]!=undefined)
            return [hash[num],i];
        else
            hash[target-num] = i;
   }
};

console.log(twoSum(nums,target));