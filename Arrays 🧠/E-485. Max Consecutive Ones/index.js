/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
    let maxConsecutiveNum = 0;

    let total = 0;
    for(let i=0;i<nums.length;i++) {
        
        if(nums[i] === 1) {
            total = total + nums[i];
            maxConsecutiveNum = Math.max(maxConsecutiveNum, total)
        }
        else {
            total = 0;
        }
    }
    return maxConsecutiveNum;
};