const frogJump = [10,20,30,10];

const energySaver = (frogJumpValues) => {
    let result = 0;
    const memoizaion = Array(frogJumpValues.length-1).fill(-1);
    const helper = (index) => {
        // Base Condition
        if(index === frogJumpValues.length-1) {
            memoizaion[index] = 0;
            return 0;
        }
        
        if(index >= frogJumpValues.length) {
            memoizaion[index] = Infinity;
            return Infinity;
        }

        if(memoizaion[index]!==-1) {
            return memoizaion[index];
        }

        memoizaion[index+1] = Math.abs(frogJumpValues[index] - frogJumpValues[index+1]) + helper(index+1);

        memoizaion[index+2] = index + 2 < frogJumpValues.length ? Math.abs(frogJumpValues[index] - frogJumpValues[index+2]) + helper(index+2) : Infinity;

        return Math.min(memoizaion[index+1], memoizaion[index+2]);

    }
    return helper(0);
}

console.log(energySaver(frogJump)); 