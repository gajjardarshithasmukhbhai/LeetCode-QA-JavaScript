/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;

    let obstacleKey = new Map();

    if(obstacleGrid[0][0] === 1 || obstacleGrid[m-1][n-1] === 1) return 0;
    const helper = (row, column) => {
        
       if(row < 0 || column < 0) {
           return 0;
       }
        if(obstacleGrid[row][column] === 1) {
            return 0;
        }
        
        let key = `${row}-${column}`;

        if(obstacleKey.has(key)) {
            return obstacleKey.get(key);
        }
        if(row === 0 && column === 0) {
            return 1;
        }
       // without obstacles
        let left = helper(row, column-1);
        let up = helper(row-1, column)
        let result = left + up;
        obstacleKey.set(key, result);

        return result;
   }
   return helper(obstacleGrid.length-1, obstacleGrid[0].length-1);
};