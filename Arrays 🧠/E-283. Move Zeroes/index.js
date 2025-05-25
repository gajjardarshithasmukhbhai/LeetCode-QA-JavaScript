/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
    let nonZeroNum = [];
    let zeroCount = 0;
    for(let i=0;i<nums.length; i++) {
        if(nums[i]!==0) {
            nums[zeroCount] = nums[i];
            ++zeroCount;
        }
    }
    for(let j=zeroCount;j<nums.length;j++) {
        nums[j] = 0;
    }
    return nums;
};