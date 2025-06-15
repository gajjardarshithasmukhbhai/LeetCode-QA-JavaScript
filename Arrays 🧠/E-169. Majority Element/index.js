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

const majorityElement = (nums) => {
    let count = 0;
    let ele;

    for (let i=0;i<nums.length;i++) {
        if (count === 0) {
            count = 1;
            ele = nums[i];
        }
        else if(nums[i] === ele) {
            count++;
        }
        else {
            count --;
        }
    }

    for(let j=0;j < nums.length;j++) {
        if(count > Math.floor(nums.length/2)) return ele;
    }
    return -1;
};
