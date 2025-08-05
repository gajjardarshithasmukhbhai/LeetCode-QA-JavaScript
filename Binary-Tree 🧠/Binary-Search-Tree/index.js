// Binary Search Tree works only on Sorted Array's value

const binarySearchTree = (arr, value) => {
    // This is Ascending Value
    const sort = [...arr].sort((a,b) => a-b);

    let beg = 0;
    let end = sort.length-1;
    let pos = -1;

    while (beg <= end) {
        let mid = Math.floor((beg + end) / 2);
        if(sort[mid] === value) {
            console.log("Search Value Has been Identified");
            return mid;
        }
        if(sort[mid]>value) {
            end = mid-1;
        }
        else {
            beg = mid+1;
        }
    }
}