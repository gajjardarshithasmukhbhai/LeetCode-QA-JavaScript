/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let numsCount = new Map();
    for(let value of nums) {
        numsCount.set(value, (numsCount.get(value) || 0)+1);
        if(numsCount.get(value)> Math.floor(nums.length/2)) return value;
    }
    return 0;
};