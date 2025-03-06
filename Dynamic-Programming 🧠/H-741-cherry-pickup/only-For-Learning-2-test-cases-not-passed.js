/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
    let maxCherries = 0;

    // Memoization hashmap for helper function
    const helperHasMap = new Map();

    // Memoization hashmap for helper2 function
    const helper2HasMap = new Map();

    const helper = (row, column, cherries) => {
        // Base Condition
        if (
            row < 0 || column > grid[0].length - 1 || column < 0 || row > grid.length - 1 || // Out of bounds
            grid[row][column] === -1 // Blocked cell
        ) {
            return 0;
        }

        // Create a unique key for the current state
        const key = `${row}_${column}_${cherries}`;

        // Check if the result is already memoized
        if (helperHasMap.has(key)) {
            return helperHasMap.get(key);
        }

        // Collect the cherry (if any)
        let currentCherries = grid[row][column];
        grid[row][column] = 0; // Mark as picked

        let result = 0;

        // If reached the bottom-right corner, start the second trip
        if (row === grid.length - 1 && column === grid.length - 1) {
            result = helper2(row, column, cherries + currentCherries);
        } else {
            // Move right or down
            result = Math.max(
                helper(row + 1, column, cherries + currentCherries),
                helper(row, column + 1, cherries + currentCherries)
            );
        }

        // Backtrack: restore the cherry
        grid[row][column] = currentCherries;

        // Memoize the result
        helperHasMap.set(key, result);

        return result;
    };

    const helper2 = (row, column, cherries) => {
        // Base Condition
        if (
            row < 0 || row > grid.length - 1 || column < 0 || column > grid[0].length - 1 || // Out of bounds
            grid[row][column] === -1 // Blocked cell
        ) {
            return 0;
        }

        // Create a unique key for the current state
        const key = `${row}_${column}_${cherries}`;

        // Check if the result is already memoized
        if (helper2HasMap.has(key)) {
            return helper2HasMap.get(key);
        }

        // Collect the cherry (if any)
        let currentCherries = grid[row][column];
        grid[row][column] = 0; // Mark as picked

        let result = 0;

        // If reached the top-left corner, update the maximum cherries
        if (row === 0 && column === 0) {
            maxCherries = Math.max(maxCherries, cherries + currentCherries);
            result = cherries + currentCherries;
        } else {
            // Move left or up
            result = Math.max(
                helper2(row - 1, column, cherries + currentCherries),
                helper2(row, column - 1, cherries + currentCherries)
            );
        }

        // Backtrack: restore the cherry
        grid[row][column] = currentCherries;

        // Memoize the result
        helper2HasMap.set(key, result);

        return result;
    };

    // Start the first trip from (0, 0)
    helper(0, 0, 0);

    return maxCherries;
};
