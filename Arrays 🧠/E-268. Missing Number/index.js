const darshitLove = (nums) => {
    const n = nums.length;

    const v = Array(n+1).fill(-1);
    
    for(let i=0; i<nums.length;i++) {
        v[nums[i]] = nums[i];
    }

    for(let i=0; i<v.length; i++){
        if(v[i] === -1) return i;
    }

    return 0;
};