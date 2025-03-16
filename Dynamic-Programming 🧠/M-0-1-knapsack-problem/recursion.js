const knapsack = (weight, values, maxWeight) => {
    const helper = (index, bagWeight) => {
        // Base Case of the Function
        if(index === weight.length) {
            return values[index];
        }

        // pick the values
        let pickTheValue = values[index] + helper(index+1, bagWeight - weight[index]);

        // not pick the values
        let nonPickTheValues = helper(index+1, bagWeight);

        return Math.min(pickTheValue, nonPickTheValues);
    }
}