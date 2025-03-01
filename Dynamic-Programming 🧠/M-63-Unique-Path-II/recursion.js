/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;

    if(obstacleGrid[0][0] === 1 || obstacleGrid[m-1][n-1] === 1) return 0;
    const helper = (row, column) => {
        
       if(row < 0 || column < 0) {
           return 0;
       }
        if(obstacleGrid[row][column] === 1) {
            return 0;
        }
        
        if(row === 0 && column === 0) {
            return 1;
        }
       // without obstacles
        let left = helper(row, column-1);
        let up = helper(row-1, column)
        let result = left + up;
        return result;
   }
   return helper(obstacleGrid.length-1, obstacleGrid[0].length-1);
};