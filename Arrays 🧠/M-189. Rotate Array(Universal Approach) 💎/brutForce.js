const rotate = (nums, k) => {

    k = k%nums.length;
    
    if(k==0) return 0;

    let lastNum = nums.slice(-k);
    
    for(let i=lastNum.length-1;i>=0;i--) {
        nums.unshift(lastNum[i]);
    }
    nums.length = nums.length-k;
    return nums;
};

console.log(rotate([1,2,3,4,5,6,7], 3));

// Time-Complexity of this code is O(k*n);