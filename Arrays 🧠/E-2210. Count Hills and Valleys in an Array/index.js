var countHillValley = (nums) => {
    let totalCount = 0;
    const removedDuplicate = [nums[0]];

    for(let i=1;i<nums.length;i++) {
        if(nums[i]!==nums[i-1]) {
            removedDuplicate.push(nums[i]);
        }
    }
    
    for(let i=1;i<removedDuplicate.length;i++) {
        if(removedDuplicate[i]>removedDuplicate[i-1] && removedDuplicate[i]>removedDuplicate[i+1]) {
            ++totalCount;
        }
        else if(removedDuplicate[i]<removedDuplicate[i-1] && removedDuplicate[i]<removedDuplicate[i+1]) {
            ++totalCount;
        }
    }
    return totalCount;
};