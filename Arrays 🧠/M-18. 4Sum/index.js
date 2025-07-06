/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function(nums, target){

    // If something is not there so we need to return
    if(nums.length < 4) return []; 
    // step:1 Sort the Array and proceed
    nums.sort((a,b) => a-b);

    const res = [];

    for(let i=0; i< nums.length-3; i++) {
        for(let j=i+1;j<nums.length-2;++j) {
            let k = j+1;
            let l = nums.length-1;
        
            while(k<l) {
                let sums = nums[i] + nums[j] + nums[k] + nums[l];
        
                if(sums === target) {
                    res.push([nums[i], nums[j], nums[k], nums[l]]);
                    while(nums[k]===nums[k+1]) k++;
                    while(nums[l] === nums[l-1]) l--;
                    k++;
                }
                // If sums is greater than the target, that means we need to decrement value from L. Because L -----> Bigger value than the Initial values
                else if(sums>target) {
                    l--;
                }
                // If sums < target that mean, we need to increment the value to achieve desired value 
                else {
                    k++
                }
            } 
            // Below step I tried to eliminate the Repeated Value through while loop
            while(nums[j] === nums[j+1]) j++;
        }
        // Below value I tried to eliminate to repeated value of I
        while(nums[i] === nums[i+1]) i++;
    }
    return res;
}