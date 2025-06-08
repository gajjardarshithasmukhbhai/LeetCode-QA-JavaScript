const merge = (nums1, m, nums2, n) => {
    
    const sortedUnionArray = [];
    let i = 0;
    let j = 0;

    while(i<m && j<n) {
        
        if(nums1[i] <= nums2[j] && nums1[i]!==0) {
            sortedUnionArray.push(nums1[i]);
            i++;
        }
        else if(nums2[j] <=nums1[i] && nums2[j]!==0) {
            sortedUnionArray.push(nums2[j]);
            j++;
        }
    }
    while(i<m) {
        if(nums1[i]!==0) {
            sortedUnionArray.push(nums1[i]);
        }
        i++;
    }

    while(j<n) {
        if(nums2[j]!==0) {
            sortedUnionArray.push(nums2[j]);
        }
        j++;
    }
    return sortedUnionArray;
};