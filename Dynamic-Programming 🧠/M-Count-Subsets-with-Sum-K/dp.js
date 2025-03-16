const findWays = (nums, target) => {
    const memoized = new Map();
    const helper = (index, sum) => {
        if(index === nums.length) {
            if(sum === target) {
                return 1;
            }
            return 0;
        }
        let key = `${index}-${sum}`;
        if(memoized.has(key)) {
            return memoized.get(key);
        }
        let pick = helper(index+1, sum+nums[index]);
        let nonPick = helper(index+1, sum);
        memoized.set(key, pick+nonPick);
        return pick + nonPick;
    }
    return helper(0, 0);
}
console.log(findWays([1, 1, 4, 5, 1, 1, 4, 5,, 1, 1, 4, 5,, 1, 1, 4, 5,, 1, 1, 4, 5],5));
