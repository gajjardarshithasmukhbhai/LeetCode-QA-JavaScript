/**
 * @param {number[]} nums
 * @return {number}
 */


// It won't works on the [-36 36] => It gives 0 but as per leetcode it should be 72
var minimumDifference = function(nums) {
    let total = 0;
    let minimumDifference = Infinity;

    for(let value of nums) {
        total +=value;
    }
    const helper = (index, currentSum) => {

        if(index === nums.length) {
            minimumDifference = Math.min(minimumDifference, Math.abs(total - 2*currentSum));
            return 0;
        }

        if(index > nums.length) {
            return 0;
        }
        // take the element
        helper(index+1, nums[index]+currentSum);
        helper(index+1, currentSum);
    }
    helper(0,0);

    return minimumDifference;
};