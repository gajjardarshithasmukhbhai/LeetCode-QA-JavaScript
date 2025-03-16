const findTargetSumWays = (nums, target) => {
    const helper = (index, sum) => {
        if(index === nums.length) {
            if(sum === target) {
                return 1;
            }
            return 0;
        }
        // take 
        let left = helper(index+1, sum+nums[index]);
        // non take
        let right = helper(index+1, sum-nums[index]);

        return left + right;
    }
    return helper(0,0);
};
console.log(findTargetSumWays([1],1)); // 1