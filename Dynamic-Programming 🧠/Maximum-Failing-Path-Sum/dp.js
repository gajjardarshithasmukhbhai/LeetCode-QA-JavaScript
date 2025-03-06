const maximumPathSum = (matrix) => {

    const memoizaionKey = new Map();

    const helper = (row, column) => {
    
        //  Base condition
        if(row === 0) {
            return matrix[row][column];
        }

        // Let's value goes out of bound
        if(row < 0 || column < 0 || column >= matrix[0].length) {
            return 0;
        }

        let key = `${row}-${column}`;
        
        if(memoizaionKey.has(key)) {
            return memoizaionKey.get(key);
        }
        
        let up = helper(row-1, column);
        let leftDiagonal = column > 0  ? helper(row-1, column-1): 0;
        let rightDiagonal = column < matrix[0].length-1 ? helper(row-1, column+1): 0;
        let result = matrix[row][column] + Math.max(leftDiagonal, rightDiagonal, up);

        memoizaionKey.set(key, result);

        return result;
    }
    let maxSum = -Infinity;

    for(let i=0;i<matrix[0].length;i++) {
        maxSum = Math.max(maxSum, helper(matrix.length-1, i));
    }
    return maxSum;
}

console.log(maximumPathSum([[1, 2, 10, 4],[100 ,3, 2, 1], [1,1,20,2], [1,2,2,1]])); // 105