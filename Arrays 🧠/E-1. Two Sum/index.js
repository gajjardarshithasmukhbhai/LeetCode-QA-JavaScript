const twoSum = (nums, target) => {
    const map = new Map();

    for(let i=0;i<nums.length;i++) {
        let diffValue = target - nums[i];

        if(map.has(diffValue)) {
            return [map.get(diffValue),i];
        }

        map.set(nums[i],i);
    }
};