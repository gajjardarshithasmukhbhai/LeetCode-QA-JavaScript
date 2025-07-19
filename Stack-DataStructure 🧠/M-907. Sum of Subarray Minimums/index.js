const nextSmallestLeft = (values) => {
    const monotonicStack = [];
    const resultOfLeft = [];

    for (let i = 0; i < values.length; i++) {
        while (
            monotonicStack.length > 0 &&
            values[monotonicStack[monotonicStack.length - 1]] > values[i] // strictly greater
        ) {
            monotonicStack.pop();
        }

        if (monotonicStack.length === 0) {
            resultOfLeft.push(-1);
        } else {
            resultOfLeft.push(monotonicStack[monotonicStack.length - 1]);
        }

        monotonicStack.push(i);
    }

    return resultOfLeft;
};

const nextSmallestRight = (values) => {
    const monotonicStack = [];
    const resultOfRight = [];

    for (let i = values.length - 1; i >= 0; i--) {
        while (
            monotonicStack.length > 0 &&
            values[monotonicStack[monotonicStack.length - 1]] >= values[i] // allow equal
        ) {
            monotonicStack.pop();
        }

        if (monotonicStack.length === 0) {
            resultOfRight.push(values.length); // no smaller -> array end
        } else {
            resultOfRight.push(monotonicStack[monotonicStack.length - 1]);
        }

        monotonicStack.push(i);
    }

    return resultOfRight.reverse(); // because we pushed right to left
};

const sumSubarrayMins = (arr) => {
    const MOD = 1e9 + 7;
    const smallestLeft = nextSmallestLeft(arr);
    const smallestRight = nextSmallestRight(arr);

    let result = 0;

    for (let index = 0; index < arr.length; index++) {
        const left = index - smallestLeft[index];
        const right = smallestRight[index] - index;
        result = (result + (arr[index] * left * right) % MOD) % MOD;
    }

    return result;
};

// Example 1:

//     Input: arr = [3,1,2,4]
//     Output: 17
//     Explanation: 
//     Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
//     Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
//     Sum is 17.
//     Example 2:

// Input: arr = [11,81,94,43,3]
// Output: 444