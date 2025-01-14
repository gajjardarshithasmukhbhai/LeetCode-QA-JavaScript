// Here we used the set method, so it will take extra logn 
// so Tc will be O(2^n)*k*logn => it will not passed in Leetcode 

// Note: but Just for understanding

const combinationSum = (candidates, target) => {
    let result = [];
    candidates.sort((a, b) => a - b);

    let finalResult = [];

    let uniqueValue = new Set();

    const helper = (index, current, target) => {
        if (target === 0) {
            let key = current.join(',');
            if (!uniqueValue.has(key)) {
                uniqueValue.add(key);
                result.push([...current]);
            }
            return;
        }

        if (target < 0 || index === candidates.length) {
            return;
        }
        current.push(candidates[index]);
        helper(index + 1, current, target - candidates[index]);
        current.pop();
        helper(index + 1, current, target);
    }
    helper(0, [], target);
    return result
};

console.log(combinationSum([10, 1, 2, 7, 6, 1, 5], 8));

