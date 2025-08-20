const countSquares = (matrix) => {
    let count = 0;
    const helper = (row, column) => {
        if(row>=matrix.length || column >= matrix[0].length) {
            return 0;
        }
        if(matrix[row][column] === 0) {
            return 0;
        }
        let left = helper(row, column+1);
        let diagonal = helper(row+1, column+1);
        let down = helper(row+1, column);
        return 1 + Math.min(left, diagonal, down);
    }

    for(let i=0;i<matrix.length;i++) {
        for(let j=0;j<matrix[0].length;j++) {
            count += helper(i,j);
        }
    }
    return count;
};