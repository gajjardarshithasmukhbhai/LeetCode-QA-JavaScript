const coinChange = (coins, target) => {
    const memoization = new Map();
    const helper = (index, target) => {
        if(target === 0) {
            return 0;
        }

        if(index === coins.length || target < 0) {
            return Infinity;
        }
        
        let key = `${index}-${target}`;

        if(memoization.has(key)) {
            return memoization.get(key);
        }
        let left = 1+helper(index, target-coins[index]);
        let right = helper(index+1, target);

        memoization.set(key, Math.min(left,right));
        return Math.min(left,right);
    }
    let result =  helper(0, target);
    return result === Infinity ? -1: result;
};

console.log(coinChange([1,2,5],11));