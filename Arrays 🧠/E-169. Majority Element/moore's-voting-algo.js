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

    let totalCount = 0;

    for(let j=0;j < nums.length;j++) {
        if(nums[j] === ele) {
            ++totalCount;
        }
    }
    if(totalCount > Math.floor(nums.length/2)) return ele;
    return -1;
};
