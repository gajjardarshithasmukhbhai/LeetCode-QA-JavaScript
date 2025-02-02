/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = (n, k) => {
    const result = []; // To store the k-th permutation
    const hasMap = new Map(); // To track used numbers
    let count = 0; // Counter to track the number of permutations generated

    // Initialize the map to track used numbers
    for (let i = 1; i <= n; i++) {
        hasMap.set(i, false);
    }

    const helper = (current) => {
        if (current.length === n) {
            count++;
            if (count === k) {
                // If this is the k-th permutation, store it in the result
                result.push(current.join(''));
            }
            return;
        }

        for (let i = 1; i <= n; i++) {
            if (!hasMap.get(i)) {
                hasMap.set(i, true); // Mark the number as used
                current.push(i); // Add the number to the current permutation
                helper(current); // Recurse
                if (count === k) {
                    // If the k-th permutation is found, stop further recursion
                    return;
                }
                current.pop(); // Backtrack
                hasMap.set(i, false); // Unmark the number
            }
        }
    };

    helper([]); // Start the recursion with an empty current permutation
    return result[0]; // Return the k-th permutation
};

console.log(getPermutation(4, 3)); // Output: "1324"