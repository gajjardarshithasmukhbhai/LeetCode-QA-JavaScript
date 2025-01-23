const permute = (nums) => {

    const checkTakenOrNot = new Map();

    const result = [];
    for (let i = 0; i < nums.length; i++) {
        checkTakenOrNot.set(nums[i], false);
    }

    const helper = (current) => {

        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (!checkTakenOrNot.get(nums[i])) {
                current.push(nums[i]);
                checkTakenOrNot.set(nums[i], true);
                helper(current);
                current.pop();
                checkTakenOrNot.set(nums[i], false);
            }
        }
    }
    helper([]);
    return result;
}
console.log(permute([0, 1]));
