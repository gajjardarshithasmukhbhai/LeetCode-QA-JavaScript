const change = (amount, coins) => {
    
    const memoization = new Map();

    const helper = (index, currentValue) => {

        if(currentValue === amount) {
            return 1;
        }

        if(index > coins.length-1) {
            return 0;
        }

        if(currentValue > amount) {
            return 0;
        }

        let key = `${index}-${currentValue}`;
        if(memoization.has(key)) {
            return memoization.get(key);
        }
        let left = helper(index, currentValue+coins[index]);
        let right = helper(index+1, currentValue);
        
        memoization.set(key, left+right);
        return left+right; 
    }
    return helper(0, 0);
};
console.log(change(10,[10]));