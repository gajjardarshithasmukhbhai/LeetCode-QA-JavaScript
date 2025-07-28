const subList = (arr) => {
    const result = [];

    function helper(index, current) {

        if (index === arr.length) {
            result.push([...current]);
            return;
        }

        current.push(arr[index]);
        helper(index + 1, current);
        current.pop();
        helper(index + 1, current);
    }

    helper(0, []); // start the Recursion
    return result;
}
// Take and Non Take
console.log(subList([3, 2, 1])); // Array(8) [ [ 3, 2, 1 ], [ 3, 2 ], [ 3, 1 ], [ 3 ], [ 2, 1 ], [ 2 ], [ 1 ], [] ]