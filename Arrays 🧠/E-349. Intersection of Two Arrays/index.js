const intersection = (nums1, nums2) => {
    const hasMapNum1 = new Map();
    const hasMapNum2 = new Map();
    const result = new Set();
    for(let value of nums1) {
        hasMapNum1.set(value, (hasMapNum1.get(value) || 0) + 1);
    }

    for(let value of nums2) {
        hasMapNum2.set(value, (hasMapNum2.get(value) || 0)+1);
    }
    for(let [key, value] of hasMapNum1) {
        if(hasMapNum2.has(key) && hasMapNum1.get(key) >= 1 && hasMapNum2.get(key) >= 1) {
            result.add(key);
        }
    }
    return [...result];
};