const subsetsWithDp = (nums) => {
    const result = [];
    nums.sort((a, b) => a - b);
    const helper = (index, current) => {
        result.push([...current]);
        for (let i = index; i < nums.length; i++) {
            if (i !== index && nums[i] === nums[i - 1]) {
                continue;
            }

            current.push(nums[i]);
            helper(i + 1, current);
            current.pop();
        }
    }
    helper(0, []);
    return result;
}
console.log(subsetsWithDp([1, 2, 2]));