const coinChange = (coins, target) => {
    const helper = (index, target) => {
        if(target === 0) {
            return 0
        }
        if(target < 0 || index === coins.length) {
            return Infinity;
        }
        let left = 1+helper(index, target-coins[index]);
        let right = helper(index+1, target);
        return Math.min(left,right);
    }
    result = helper(0, target);
    return result === Infinity ? -1: result;
};
