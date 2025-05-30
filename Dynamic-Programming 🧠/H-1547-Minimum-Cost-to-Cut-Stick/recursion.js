/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
const minCost = (n, cuts) => {
    cuts.push(0,n)
    cuts.sort((a,b) => a-b);

    const helper = (left, right) => {
        
        if(left+1 === right) {
            return 0;
        }
        
        let minCost = Infinity;

        for(let i=left+1; i<right;i++) {
            let minValue = (cuts[right]-cuts[left]) + helper(left, i) + helper(i, right);
            minCost =  Math.min(minCost, minValue)
        }
        return minCost;
    }
    return helper(0, cuts.length-1);
};