/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSum = (nums) => {
    let positiveNumber = new Set();
    let maxNegativeNum = -Infinity;
    let sum = 0;
    let result = 0;
    for(let i=0;i<nums.length;i++) {
        if(nums[i] > 0) {
            positiveNumber.add(nums[i]);
        }
        else {
            maxNegativeNum = Math.max(maxNegativeNum, nums[i]);
        }
    }
    
    for(let value of positiveNumber) {
        result += value;
    }

    if(positiveNumber.size > 0) {
        return result;
    }
    else {
        return maxNegativeNum;
    }
}; 