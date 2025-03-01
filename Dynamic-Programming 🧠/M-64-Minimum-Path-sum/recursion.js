let grid = [[1,3,1],[1,5,1],[4,2,1]]
let minPathSum = (grid) => {
    const helper = (row, column) => {
        if(row < 0 || column < 0) {
            return Infinity;
        }
        
        if(row === 0 && column === 0) {
            return grid[row][column];
        }
        
        let result = Infinity;

        let left = helper(row, column-1);
        let up = helper(row-1,column);
        result =  grid[row][column] + Math.min(left, up);

        return result;
    }
    return helper(grid.length-1, grid[0].length-1);
};

console.log(minPathSum(grid));