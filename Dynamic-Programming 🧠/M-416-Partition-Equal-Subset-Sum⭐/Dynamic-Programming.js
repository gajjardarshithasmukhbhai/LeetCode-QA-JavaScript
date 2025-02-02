const canPartition = (arr) => {
    let totalValue = 0;

    // Calculate the total value of the array
    for (let value of arr) {
        totalValue += value;
    }

    // If the total sum is odd, it cannot be partitioned into two equal subsets
    if (totalValue % 2 !== 0) {
        return false;
    }

    const target = totalValue / 2;

    // Memoization table to store results for (index, sum)
    const memo = new Map();

    const helper = (index, sum) => {
        // If the sum equals the target, we found a valid partition
        if (sum === target) {
            return true;
        }

        // If the index exceeds the array length or the sum exceeds the target, backtrack
        if (index >= arr.length || sum > target) {
            return false;
        }

        // Check if the result for the current state is already computed
        const key = `${index}-${sum}`;
        if (memo.has(key)) {
            return memo.get(key);
        }

        // Include the current element
        if (helper(index + 1, sum + arr[index]) === true) {
            memo.set(key, true);
            return true;
        }

        // Exclude the current element
        if (helper(index + 1, sum) === true) {
            memo.set(key, true);
            return true;
        }

        // Store and return the result for this state
        memo.set(key, false);
        return false;
    };

    return helper(0, 0);
};

console.log(canPartition([1, 6, 5, 8, 4])); // Output: true
