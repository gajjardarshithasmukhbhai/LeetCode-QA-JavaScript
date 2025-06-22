// Here Breaking Point Concept is used: 

const nextPermutation = (nums) => {
    let breakingPoint = -1;
    let numLength = nums.length;

    // Find the Pivot Value, Where Breaking is Happens
    for(let i=numLength-2;i>=0;i--) {
        if(nums[i] < nums[i+1]) {
            breakingPoint = i;
            break;
        }
    }

    // without breaking point Increasing the value

    if(breakingPoint === -1) {
        return nums.reverse();
    }

    // If we need number greater than the value, so we need to rotate

    for(let i = numLength-1;i>breakingPoint;i--) {
        if(nums[i] > nums[breakingPoint]) {
            [nums[i], nums[breakingPoint]] = [nums[breakingPoint], nums[i]];
            break;
        }
    }

    let left = breakingPoint+1;
    let right = numLength-1;

    while(left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
    return nums;
};