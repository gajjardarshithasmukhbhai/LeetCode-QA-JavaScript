const permuteUnique = (nums) => {
    nums.sort((a, b) => a - b);
    const rowNums = [];
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        rowNums.push([nums[i], false]);
    }
    const helper = (current) => {
        if (nums.length === current.length) {
            result.push([...current]);
            return;
        }
        for (let i = 0; i < rowNums.length; i++) {
            if (!(i > 0 && rowNums[i][0] === rowNums[i - 1][0] && !rowNums[i - 1][1])) {
                if (!rowNums[i][1]) {
                    current.push(rowNums[i][0]);
                    rowNums[i][1] = true;
                    helper(current);
                    current.pop();
                    rowNums[i][1] = false;
                }
            }
        }
    }
    helper([]);
    return result;
};
console.log(permuteUnique([1, 2, 3])); //[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permuteUnique([1, 1, 2])); // [[1,1,2],[1,2,1],[2,1,1]]