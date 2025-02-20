const stones = [0,1,3,5,6,8,12,17];

const canCross = (stones) => {
    const stoneWithIndex = new Map();
    const memoization = new Map();

    for(let i=0;i<stones.length;i++) {
        stoneWithIndex.set(stones[i], true);
    }
    // PJ => Previous Jump and CS => Current Stand
    const helper = (pj, cs) => {
        if(stones[stones.length-1] == cs) {
            return true;
        }

        if(!stoneWithIndex.has(cs)) {
            return false;
        }
        
        const position1 = pj-1;
        const position2 = pj;
        const position3 = pj+1;

        let key = `${pj}-${cs}`;

        if(memoization.has(key)) {
            return memoization.get(key);
        }

        if(position1 > 0 && helper(position1, cs+position1)) {
            memoization.set(key, true);
            return true;
        }
        
        if(position2 > 0 && helper(position2, cs+position2)) {
            memoization.set(key, true);
            return true;
        }
        
        if(position3 > 0 && helper(position3, cs+position3)) {
            memoization.set(key, true);
            return true;
        }
        memoization.set(key, false);

        return false;
    }
    return helper(1, 1);
};

console.log(canCross(stones));