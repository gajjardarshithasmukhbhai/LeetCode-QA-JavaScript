/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const uniquePathKey = new Map();
    const helper = (m,n) => {
        // m and n are nothing but row and column
        if(m === 0 && n === 0) {
            return 1;
        }
        // out of bound will go => Row and Column
        if(m < 0 || n < 0) {
            return 0;
        }

        const key = `${m}-${n}`;

        if(uniquePathKey.has(key)) {
            return uniquePathKey.get(key);
        }

        let left = helper(m,n-1);
        let up = helper(m-1,n);
        let result = left + up;
        uniquePathKey.set(key, result);
        return result;
    }
    return helper(m-1,n-1);
};