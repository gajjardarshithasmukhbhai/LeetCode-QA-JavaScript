const frogJump = [7, 4, 4, 2, 6, 6, 3, 4];

const checkKthFrogEnergy = (values,k) => {

    
    const helper = (index) => {
        
        if(index === values.length-1) {
            return 0;
        }
        if(index >= values.length) {
            return Infinity;
        }

        let minJumpEnergy = Infinity;

        for(let i=1;i<=k;i++) {
            if(index+i < values.length) {
                let jump = Math.abs(values[index] - values[index+i]) + helper(index+i);
                minJumpEnergy =  Math.min(minJumpEnergy, jump);
            }
        }
        return minJumpEnergy;
    }
    return helper(0);
}
console.log(checkKthFrogEnergy(frogJump, 3));