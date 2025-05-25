/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
    k = k%nums.length;
    
    if(k==0) return nums;
    
    reverse(nums, 0, nums.length-1);
    reverse(nums,0, k-1);
    reverse(nums, k, nums.length-1);
    return nums;
};

const reverse = (nums, start, end) => {
    while(start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--; 
    }
}