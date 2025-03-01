/**
 * @param {number[][]} grid
 * @return {number}
 */
let minPathSum = (grid) => {
    let memoization = new Map();
    const helper = (row, column) => {
        if(row < 0 || column < 0) {
            return Infinity;
        }
        
        if(row === 0 && column === 0) {
            return grid[row][column];
        }
        
        const key = `${row}-${column}`;
        let result = Infinity;

        if(memoization.has(key)) {
            return memoization.get(key);
        }
        let left = helper(row, column-1);
        let up = helper(row-1,column);
        result =  grid[row][column] + Math.min(left, up);
        memoization.set(key, result);

        return result;
    }
    return helper(grid.length-1, grid[0].length-1);
};