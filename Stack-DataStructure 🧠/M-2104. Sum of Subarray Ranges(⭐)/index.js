/**
 * @param {number[]} nums
 * @return {number}
 */
// sum of subarray ranges is nothing but the difference between the largest 
// of subarray and smallest of subarray difference

const smallestLeft = (myValues) => {
    const monotonicStack = [];
    const resultStack = [];
    for (let i = 0; i < myValues.length; i++) {
        while (monotonicStack.length > 0 && myValues[monotonicStack[monotonicStack.length - 1]] > myValues[i]) {
            monotonicStack.pop();
        }
        if (monotonicStack.length === 0) {
            resultStack.push(-1);
        } else {
            resultStack.push(monotonicStack[monotonicStack.length - 1]);
        }
        monotonicStack.push(i);
    }
    return resultStack;
};

const smallestRight = (myValues) => {
    const monotonicStack = [];
    const resultStack = new Array(myValues.length);
    for (let i = myValues.length - 1; i >= 0; i--) {
        while (monotonicStack.length > 0 && myValues[monotonicStack[monotonicStack.length - 1]] >= myValues[i]) {
            monotonicStack.pop();
        }
        if (monotonicStack.length === 0) {
            resultStack[i] = myValues.length;
        } else {
            resultStack[i] = monotonicStack[monotonicStack.length - 1];
        }
        monotonicStack.push(i);
    }
    return resultStack;
};

const smallestSubArray = (values) => {
    const leftSubArray = smallestLeft(values);
    const rightSubArray = smallestRight(values);
    let result = 0;

    for (let index = 0; index < values.length; index++) {
        let left = index - leftSubArray[index];
        let right = rightSubArray[index] - index;
        result += (left * right) * values[index];
    }
    return result;
};

const largestLeft = (myValues) => {
    const monotonicStack = [];
    const resultStack = [];
    for (let i = 0; i < myValues.length; i++) {
        while (monotonicStack.length > 0 && myValues[monotonicStack[monotonicStack.length - 1]] < myValues[i]) {
            monotonicStack.pop();
        }
        if (monotonicStack.length === 0) {
            resultStack.push(-1);
        } else {
            resultStack.push(monotonicStack[monotonicStack.length - 1]);
        }
        monotonicStack.push(i);
    }
    return resultStack;
};

const largestRight = (myValues) => {
    const monotonicStack = [];
    const resultStack = new Array(myValues.length);
    for (let i = myValues.length - 1; i >= 0; i--) {
        while (monotonicStack.length > 0 && myValues[monotonicStack[monotonicStack.length - 1]] <= myValues[i]) {
            monotonicStack.pop();
        }
        if (monotonicStack.length === 0) {
            resultStack[i] = myValues.length;
        } else {
            resultStack[i] = monotonicStack[monotonicStack.length - 1];
        }
        monotonicStack.push(i);
    }
    return resultStack;
};

const largestSubArray = (values) => {
    const left = largestLeft(values);
    const right = largestRight(values);
    let result = 0;

    for (let index = 0; index < values.length; index++) {
        let leftCount = index - left[index];
        let rightCount = right[index] - index;
        result += (leftCount * rightCount) * values[index];
    }
    return result;
};

const subArrayRanges = (nums) => {
    return largestSubArray(nums) - smallestSubArray(nums);
};

// ✅ Example usage:
console.log(subArrayRanges([1, 3, 3])); // Expected output: 4
