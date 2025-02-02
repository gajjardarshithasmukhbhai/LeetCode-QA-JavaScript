const mergeSort = (arr) => {

    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    //this is for Left nodes
    mergeSort(left);
    // this is for right nodes
    mergeSort(right);
    // merging the nodes
    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {

    let result = [];
    let i = 0;
    let j = 0;

    // bottom to top sorted merging
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        }
        else {
            result.push(right[j])
            j++;
        }
    }

    // remaining element that are not compare mean let's say left all array push in result. so remaining ele present either left or right
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // right side array value remaining
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    return result;
}

console.log(mergeSort([36, 22, 78, 9, 12, 0, 2]));