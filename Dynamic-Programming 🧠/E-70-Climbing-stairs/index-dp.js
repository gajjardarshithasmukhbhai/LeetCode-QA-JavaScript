/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let wayToStairs = 0;
    const memoizationList = Array(n+1).fill(-1);
    const helper = (numValue) => {
        if(numValue === 0) {
            wayToStairs++;
            return 1;
        }
        if (numValue < 0) {
            return 0;
        }
        if(memoizationList[numValue]!==-1) {
            return memoizationList[numValue];
        }
        memoizationList[numValue] = helper(numValue-2) + helper(numValue-1);
        return memoizationList[numValue];
    }
    return helper(n);
};