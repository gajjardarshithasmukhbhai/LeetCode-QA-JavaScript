const rotateByDplace = (nums, Dplace) => {
    // [7,6,5,4,3,2,1]
    reverse(nums,0, Dplace-1);
    
    reverse(nums, Dplace, nums.length-1);

    reverse(nums, 0, nums.length-1);
    
    return nums;
}

const reverse = (nums, start, end) => {
    while(start < end) {
        [nums[start],nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

console.log(rotateByDplace([1,2,3,4,5,6,7], 3));