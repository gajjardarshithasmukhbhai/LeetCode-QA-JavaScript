const combinationSum = (candidates, target) => {
    let result = [];

    const helper = (index, current, target) => {
        if (target === 0) {
            result.push([...current]);
            return;
        }

        if (target < 0 || index === candidates.length) {
            return;
        }
        current.push(candidates[index]);
        helper(index, current, target - candidates[index]);
        current.pop();
        helper(index + 1, current, target);
    }
    helper(0, [], target);
    return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));