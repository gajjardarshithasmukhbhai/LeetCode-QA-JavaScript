const findTargetSumWays = (nums, target) => {
    const memoization = new Map();
    const helper = (index, sum) => {
        if(index === nums.length) {
            if(sum === target) {
                return 1;
            }
            return 0;
        }
        let key = `${index}-${sum}`;
        if(memoization.has(key)) {
            return memoization.get(key);
        }
        // take 
        let left = helper(index+1, sum+nums[index]);
        // non take
        let right = helper(index+1, sum-nums[index]);
        memoization.set(key, left+right);
        return left + right;
    }
    return helper(0,0);
};
console.log(findTargetSumWays([1],1));