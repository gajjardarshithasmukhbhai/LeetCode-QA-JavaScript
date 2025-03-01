/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const memoization = new Map();
    const helper = (m, n) => {
        
        if(m === triangle.length-1) {
            return triangle[m][n];
        }
        // Out Of Bound Base Condition
        if(m >= triangle.length || n >= triangle[m].length) {
            return Infinity;
        }

        const key = `${m}-${n}`;

        if(memoization.has(key)) {
            return memoization.get(key);
        }
        let down = helper(m+1,n);
        let diagonal = helper(m+1, n+1);
        let result = triangle[m][n] + Math.min(down, diagonal);
        memoization.set(key, result);

        return result;
    }
    return helper(0,0);
};