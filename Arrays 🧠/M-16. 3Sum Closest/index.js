/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// It's Called as the Two Pointer Approach  
const threeSumClosest = (value, targetValue) => {
    value.sort((a,b) => a-b); 
    let ans = value[0] + value[1] + value[2];
    for(let i = 0; i< value.length-2;i++) {
        let start = i+1; // 0
        let end = value.length-1 // 1
        while(start<end) {
            const sum = value[i] + value[start] + value[end]; 
            if(sum>targetValue) {
                end--
            }
            else {
                start++;
            }
            if(Math.abs(sum-targetValue) < Math.abs(ans-targetValue)) {
                ans = sum;
            }
        }
    }
    return ans;
}