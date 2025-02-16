// TODO: this result is memoization, result is filled with the -1 
// so when we do this result[numValue], so it will replace with the Actual value

// so before come for result, it will check either that value exist or not. if not exist it means -1 
// if it's exist, so it means something value present over there
// we can make O(1) => For Space Complexity

const getFibonnaciSeries = (value) => {

    const result = Array(value + 1).fill(-1);
    const helper = (numValue) => {
        if (numValue === 0) {
            return 0;
        }
        if (numValue === 1) {
            return 1;
        }
        result[numValue] = helper(numValue - 1) + helper(numValue - 2);

        return result[numValue];
    }
    return helper(value);
}
console.log(getFibonnaciSeries(5));

