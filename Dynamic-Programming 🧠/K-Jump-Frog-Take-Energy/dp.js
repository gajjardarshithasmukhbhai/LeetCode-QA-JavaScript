const frogJump = [7, 4, 4, 2, 6, 6, 3, 4, 7, 4, 4, 2, 6, 6, 3, 4, 7, 4, 4, 2, 6, 6, 3, 4];

const checkKthFrogEnergy = (values,k) => {

    const memoizaion = Array(values.length).fill(-1);
    const helper = (index) => {
        
        if(index === values.length-1) {
            return 0;
        }
        if(index >= values.length) {
            return Infinity;
        }

        if (memoizaion[index] !== -1) {
            return memoizaion[index]; // Return precomputed result
        }

        let minJumpEnergy = Infinity;

        for(let i=1;i<=k;i++) {
            if(index+i < values.length) {
                let jump = Math.abs(values[index] - values[index+i]) + helper(index+i);
                minJumpEnergy =  Math.min(minJumpEnergy, jump);
            }
        }
        memoizaion[index] = minJumpEnergy
        return memoizaion[index];
    }
    return helper(0);
}
console.log(checkKthFrogEnergy(frogJump, 3));