// SC - space complexity is O(n)
// TC - Time Complexity is O(n)
const rearrangeArray = (nums) => {
    const result = [];

    const positive = [];
    const negative = [];

    for(let i=0;i<nums.length;i++) {
        if(nums[i] > 0) {
            positive.push(nums[i]);
        }
        else {
            negative.push(nums[i]);
        }
    }
    for(let i=0;i<positive.length;i++) {
        nums[2*i] = positive[i];
        nums[2*i+1] = negative[i]; 
    }
    return nums;
};