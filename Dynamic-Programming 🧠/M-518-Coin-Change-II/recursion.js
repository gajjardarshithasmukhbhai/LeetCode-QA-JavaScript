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
        let left = helper(index, currentValue+coins[index]);
        let right = helper(index+1, currentValue);
        return left+right; 
    }
    return helper(0, 0);
};
console.log(change(10,[10]));