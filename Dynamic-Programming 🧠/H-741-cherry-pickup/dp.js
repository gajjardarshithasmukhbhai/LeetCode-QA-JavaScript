var cherryPickup = function (grid) {
    const n = grid.length;
    if (n === 0) return 0;

    // Memoization table
    const memo = new Map();

    // Helper function to compute the maximum cherries
    const helper = (row1, col1, row2, col2) => {
        // If either person goes out of bounds or steps on a blocked cell
        if (
            row1 >= n || col1 >= n || row2 >= n || col2 >= n || // Out of bounds
            grid[row1][col1] === -1 || grid[row2][col2] === -1 // Blocked cell
        ) {
            return -Infinity; // Invalid path
        }

        // If both persons reach the bottom-right corner
        if (row1 === n - 1 && col1 === n - 1 && row2 === n - 1 && col2 === n - 1) {
            return grid[row1][col1]; // Only one cherry to pick
        }

        // Create a unique key for the current state
        const key = `${row1}_${col1}_${row2}_${col2}`;

        // Check if the result is already memoized
        if (memo.has(key)) {
            return memo.get(key);
        }

        // Collect cherries:
        // If both persons are on the same cell, only one cherry is picked
        let cherries = 0;
        if (row1 === row2 && col1 === col2) {
            cherries = grid[row1][col1];
        } else {
            cherries = grid[row1][col1] + grid[row2][col2];
        }

        // Explore all possible moves:
        // Person 1: right or down
        // Person 2: right or down
        const move1 = helper(row1, col1 + 1, row2, col2 + 1); // Right-Right
        const move2 = helper(row1, col1 + 1, row2 + 1, col2); // Right-Down
        const move3 = helper(row1 + 1, col1, row2, col2 + 1); // Down-Right
        const move4 = helper(row1 + 1, col1, row2 + 1, col2); // Down-Down

        // Add the maximum cherries from the next moves
        cherries += Math.max(move1, move2, move3, move4);

        // Memoize the result
        memo.set(key, cherries);

        return cherries;
    };

    // Start the helper function from (0, 0) for both persons
    const result = helper(0, 0, 0, 0);

    // If no valid path exists, return 0
    return Math.max(result, 0);
};