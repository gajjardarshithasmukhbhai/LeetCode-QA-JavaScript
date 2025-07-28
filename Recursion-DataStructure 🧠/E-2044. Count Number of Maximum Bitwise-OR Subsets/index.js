const countMaxOrSubsets = (nums) => {
    let count = 0;
    let resultOfBit = 0;

    for(let i=0;i<nums.length;i++) {
        resultOfBit = resultOfBit | nums[i];
    }
    const helper = (index,result) => {
        if(index === nums.length) {
            if(result === resultOfBit) {
                ++count;
            }
            return;
        }
        helper(index+1,result | nums[index]);
        helper(index+1,result)
    }
    helper(0, 0);
    return count;
};
console.log(countMaxOrSubsets([3,1]));