const knapsack = (weight, values, maxWeight) => {
    const memoization = new Map();
    const helper = (index, bagWeight) => {
        // Base Case of the Function, if go the out of bound so it will return the 0
        if(index === weight.length) {
            return 0;
        }

        let key = `${index}-${bagWeight}`;

        if(memoization.has(key)) {
            return memoization.get(key);
        }

        // If current weight is more than the bagWeight, so skip it
        if(weight[index] > bagWeight) {
            return helper(index+1, bagWeight)
        }
        else {
            // pick the values
            let pickTheValue = values[index] + helper(index+1, bagWeight - weight[index]);
    
            // not pick the values
            let nonPickTheValues = helper(index+1, bagWeight);
    
            memoization.set(key, Math.max(pickTheValue, nonPickTheValues));
            
            return Math.max(pickTheValue, nonPickTheValues);
        }
    }
    return helper(0,maxWeight);
}
console.log(knapsack([3,4,5], [30,50,60], 8));