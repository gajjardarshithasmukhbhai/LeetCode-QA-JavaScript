const combinationSum = (arr, target) => {
    let result = [];
    let count = 0;

    function helper(index, current, sum) {
        if (index === arr.length) {
            if (sum === target) {
                return 1;
            }
            return 0;
        }
        sum += arr[index];

        let left = helper(index + 1, current, sum);
        sum -= arr[index];
        let right = helper(index + 1, current, sum);

        return left + right;
    }
    return helper(0, [], 0);

}
console.log(combinationSum([10, 1, 2, 7, 6, 1, 5], 9));