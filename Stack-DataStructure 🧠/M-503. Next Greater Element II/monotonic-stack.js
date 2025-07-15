const nextGreaterElements = (nums) => {

    const monotonicArray = [];
    const result = [];

    for(let i=2*nums.length-1; i>=0;i--) {
        while(monotonicArray.length>0 && nums[i%nums.length] >= monotonicArray[monotonicArray.length-1]) {
            monotonicArray.pop();
        }
        
        if(i<nums.length) {
            if(monotonicArray.length === 0) {
                result.push(-1);
            }else{
                result.push(monotonicArray[monotonicArray.length-1]);
            }
        }
        monotonicArray.push(nums[i%nums.length]);
    }
    return result.reverse();
}

console.log(nextGreaterElements([1,2,3,4,3]));
// [ 2, 3, 4, -1, 4 ]