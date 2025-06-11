// Time Complexity is O(n)
// Space Complexity is O(1)
const sortColors = (nums) => {
    let countZero = 0;
    let countOne = 0;
    let countTwo = 0;
    let result = [];

    for(let i=0;i<nums.length;i++) {
        if(nums[i] === 0) ++countZero;
        if(nums[i] === 1) ++countOne;
        if(nums[i] === 2) ++countTwo;
    }

    for(let i=0;i<countZero;i++) {
        nums[i] = 0;
    }
    for(let j=countZero; j<countZero+countOne;j++) {
        nums[j] = 1;
    }
    for(let k=countZero+countOne;k<nums.length;k++) {
        nums[k] = 2;
    }
    return nums
};