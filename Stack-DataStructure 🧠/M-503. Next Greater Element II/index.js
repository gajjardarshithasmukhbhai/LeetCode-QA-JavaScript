// This is Brute Force Problem:
// TC is O(n^2)
// SC is O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = (nums) => {
    const result = [];
    for(let i=0;i<nums.length;i++) {
        let isValueFind = false;
        for(let j=i+1;j<2*nums.length;j++) {
            if(nums[i]<nums[j%nums.length]) {
                result.push(nums[j%nums.length]);
                isValueFind = true;
                break;
            }
        }
        if(!isValueFind) {
            result.push(-1);
        }
    }
    return result;
};

