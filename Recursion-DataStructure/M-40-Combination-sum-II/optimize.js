const combinationSum2 = (candidates, target) => {
    let result = [];

    // Sort candidates to handle duplicates
    candidates.sort((a, b) => a - b);

    const helper = (index, target, current) => {
        if (target === 0) {
            result.push([...current]);
            return;
        }

        if (target < 0 || index >= candidates.length) {
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            // Skip duplicates
            if (i > index && candidates[i] === candidates[i - 1]) {
                continue;
            }

            if (candidates[i] > target) {
                break;
            }

            // Choose the current candidate
            current.push(candidates[i]);

            // Recurse with updated target and index
            helper(i + 1, target - candidates[i], current);

            // Backtrack
            current.pop();
        }
    };

    helper(0, target, []);
    return result;
};

console.log(combinationSum2([2, 5, 2], 4));
