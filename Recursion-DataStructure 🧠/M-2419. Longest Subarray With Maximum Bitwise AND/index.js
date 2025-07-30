/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = (nums) => {
    let maxValue = Math.max(...nums);    
    let maxSubArrayLen = 0;
    const helper = (index, currentLen) => {
        if(index === nums.length) {
            maxSubArrayLen = Math.max(maxSubArrayLen, currentLen);
            return;
        }

        if(nums[index] === maxValue) {
            helper(index+1, currentLen+1);
        }
        else {
            maxSubArrayLen = Math.max(maxSubArrayLen, currentLen);
            helper(index+1,0);
        }
    }
    helper(0,0);
    return maxSubArrayLen
};
