
var reversePairs = (nums) => {

    let count = 0;
    const merge = (left, right) => {
        let result = [];
        let i = 0;
        let j = 0;

        // this works in asc order
        while (i < left.length && j < right.length) {
            if (left[i] > 2 * right[j]) {
                count += left.length - i;
                j++
            }
            else {
                i++;
            }
        }

        i = 0;
        j = 0;

        // conquer the array
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            }
            else {
                result.push(right[j]);
                j++;
            }
        }

        // conquer rest of left indices
        while (i < left.length) {
            result.push(left[i]);
            i++;
        }

        // conquer rest of right indices
        while (j < right.length) {
            result.push(right[j]);
            j++;
        }

        return result;
    }
    const mergeSort = (arr) => {
        if (arr.length <= 1) {
            return arr;
        }
        let mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        return merge(mergeSort(left), mergeSort(right));
    };
    mergeSort(nums);
    return count;
};

console.log(reversePairs([5, 4, 3, 2, 1]));