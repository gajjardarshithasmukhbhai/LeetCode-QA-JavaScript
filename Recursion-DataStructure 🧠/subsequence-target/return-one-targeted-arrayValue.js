const combinationSum = (arr, target) => {
    let result = [];

    function helper(index, current, sum) {
        if (index === arr.length) {
            if (sum === target) {
                result.push([...current]);
                return true;
            }
            return false;
        }
        current.push(arr[index]);
        sum += arr[index];
        if (helper(index + 1, current, sum) === true) {
            return true;
        }
        current.pop();
        sum -= arr[index];
        if (helper(index + 1, current, sum) === true) {
            return true
        }
        return false;
    }
    helper(0, [], 0);

    return result;
}
console.log(combinationSum([10, 1, 2, 7, 6, 1, 5], 9));