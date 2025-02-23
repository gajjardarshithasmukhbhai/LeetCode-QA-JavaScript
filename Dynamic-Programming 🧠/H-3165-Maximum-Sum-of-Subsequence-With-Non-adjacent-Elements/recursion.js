const adjacentValues = [2,1,4,9];

const maximumSumSubsequence = (adjacentNum) => {

    const helper = (index) => {
        
        // Base Condition
        if(index >= adjacentNum.length-1) {
            return 0;
        }

        let pick = value[index] + helper(index+2);
        let notPick = helper(index+1);
        
        return Math.max(pick, notPick);
    }

    return helper(0);
}

console.log(maximumSumSubsequence(adjacentValues)); // 6