const maximumPathSum = (matrix) => {

    const helper = (row, column) => {

        //  Base condition
        if(row === 0) {
            return matrix[row][column];
        }

        // Let's value goes out of bound
        if(row < 0 || column < 0 || column >= matrix[0].length) {
            return 0;
        }

        let up = helper(row-1, column);
        let leftDiagonal = column > 0  ? helper(row-1, column-1): 0;
        let rightDiagonal = column < matrix[0].length-1 ? helper(row-1, column+1): 0;
        let result = matrix[row][column] + Math.max(leftDiagonal, rightDiagonal, up);

        return result;
    }
    let maxSum = -Infinity;

    for(let i=0;i<matrix[0].length;i++) {
        maxSum = Math.max(maxSum, helper(matrix.length-1, i));
    }
    return maxSum
}

console.log(maximumPathSum([[1,8,3],[4,5,6], [2,7,5]]));