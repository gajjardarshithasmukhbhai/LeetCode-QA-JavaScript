const partion = (arr, low, high) => {
    let pivot = arr[low];
    let i = low;
    let j = high;

    // below condition break if i and j crossed
    while (i < j) {
        while (arr[i] <= pivot && i < high) {
            i++; // skipped the value
        }
        while (arr[j] > pivot && j > low) {
            j--;
        }
        //swap the elements if i and j have not crossed
        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

    }

    // below code works if while condition failed
    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;

    return j;
}

const qs = (arr, low, high) => {
    if (low < high) {
        let pIndex = partion(arr, low, high);
        qs(arr, low, pIndex);
        qs(arr, pIndex + 1, high);
    }
}

const quicksort = (arr) => {
    qs(arr, 0, arr.length - 1);
    return arr
}


console.log(quicksort([22, 1, 2, 4, 5]));