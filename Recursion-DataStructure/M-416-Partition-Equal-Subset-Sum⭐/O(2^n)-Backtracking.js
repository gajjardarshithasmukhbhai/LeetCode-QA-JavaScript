const canPartition = (arr) => {
    let totalValue = 0;
    let target = 0;
    for (let value of arr) {
        totalValue += value;
    }
    target = totalValue / 2;

    const helper = (index, current, sum) => {

        if (sum === target) {
            return true;
        }
        if (sum > target || index === arr.length) {
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
            return true;
        }
        return false;
    }

    return helper(0, [], 0);
};

console.log(canPartition([1, 2, 3, 5])); false