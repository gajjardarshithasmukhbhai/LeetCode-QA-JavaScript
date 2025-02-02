// Time Complexity of below code is 2^n + 2^nlog2n

const summationOfArray = (arr, target) => {
    const result = [];
    const helper = (index, current, sum) => {

        if (index === arr.length) {
            result.push(sum);
            return;
        }

        if (index > arr.length || sum > target) {
            return;
        }

        sum += arr[index];
        current.push(arr[index]);
        helper(index + 1, current, sum);
        sum -= arr[index];
        current.pop();
        helper(index + 1, current, sum);
    }
    helper(0, [], 0);
    return result
}
console.log(summationOfArray([3, 1, 2], 5));