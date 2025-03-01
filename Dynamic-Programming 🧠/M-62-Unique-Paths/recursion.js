/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const helper = (m,n) => {
        // m and n are nothing but row and column
        if(m === 0 && n === 0) {
            return 1;
        }
        // out of bound will go => Row and Column
        if(m < 0 || n < 0) {
            return 0;
        }
        let left = helper(m,n-1);
        let up = helper(m-1,n);
        return left + up;
    }
    return helper(m-1,n-1);
};