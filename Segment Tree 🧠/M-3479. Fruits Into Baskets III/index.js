/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
const buildTreeMin = (i, left, right, baskets, maxByRoot) => {
    if (left === right) {
        maxByRoot[i] = baskets[left];
        return;
    }
    let mid = Math.floor((left + right) / 2);
    buildTreeMin(2 * i + 1, left, mid, baskets, maxByRoot);
    buildTreeMin(2 * i + 2, mid + 1, right, baskets, maxByRoot);
    maxByRoot[i] = Math.max(maxByRoot[2 * i + 1], maxByRoot[2 * i + 2]);
};

const querySegmentTree = (index, left, right, queryLeft, queryRight, maxByRootValues, fruit) => {
    // if the max in this range can't fit the fruit, skip
    if (maxByRootValues[index] < fruit) {
        return false;
    }
    // found a single basket
    if (left === right) {
        maxByRootValues[index] = -Infinity; // mark basket as used
        return true;
    }

    let mid = Math.floor((left + right) / 2);
    let placed = querySegmentTree(2 * index + 1, left, mid, queryLeft, queryRight, maxByRootValues, fruit);
    if (!placed) {
        placed = querySegmentTree(2 * index + 2, mid + 1, right, queryLeft, queryRight, maxByRootValues, fruit);
    }

    maxByRootValues[index] = Math.max(
        maxByRootValues[2 * index + 1],
        maxByRootValues[2 * index + 2]
    );

    return placed;
};

const numOfUnplacedFruits = (fruits, baskets) => {
    let result = 0;
    let maxByRootArraySize = new Array(4 * baskets.length).fill(-Infinity);

    buildTreeMin(0, 0, baskets.length - 1, baskets, maxByRootArraySize);

    for (let i = 0; i < fruits.length; i++) {
        if (!querySegmentTree(0, 0, baskets.length - 1, i, baskets.length - 1, maxByRootArraySize, fruits[i])) {
            result++;
        }
    }
    return result;
};
