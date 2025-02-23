const adjacentValues = [2, 1, 4, 9, 10, 11, 22, 34, 32, 20, 11, 22, 34, 32, 20, 11, 22, 34, 32, 20, 11, 22, 34, 32, 20, 11, 22, 34, 32, 20];

const maximumSumSubsequence = (adjacentNum) => {

    const memoizaion = Array(adjacentNum.length).fill(-1);
    
    const helper = (index) => {
        // Base Condition: If index goes out of bounds, return 0
        if (index >= adjacentNum.length) {
            return 0;
        }

        if(memoizaion[index]!==-1) {
            return memoizaion[index];
        }

        // Pick the current element and move to index+2
        let pick = adjacentNum[index] + helper(index + 2);

        // Don't pick the current element and move to index+1
        let notPick = helper(index + 1);

        memoizaion[index] = Math.max(pick, notPick);
        return memoizaion[index];
    };

    return helper(0);
};

console.log(maximumSumSubsequence(adjacentValues)); // 314