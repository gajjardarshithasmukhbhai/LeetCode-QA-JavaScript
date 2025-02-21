const frogJump = [10,30,30,10];

const energySaver = (frogJumpValues) => {
    let result = 0;
    const helper = (index) => {
        // Base Condition
        if(index === frogJumpValues.length-1) {
            return 0;
        }
        
        if(index >= frogJumpValues.length) {
            return Infinity;
        }

        let jumpOne = Math.abs(frogJumpValues[index] - frogJumpValues[index+1]) + helper(index+1);

        let jumpTwo = index + 2 < frogJumpValues.length ? Math.abs(frogJumpValues[index] - frogJumpValues[index+2]) + helper(index+2) : Infinity;

        return Math.min(jumpOne, jumpTwo);

    }
    return helper(0);
}

console.log(energySaver(frogJump)); // 40