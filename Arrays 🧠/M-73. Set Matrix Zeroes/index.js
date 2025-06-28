const setZeroes = (matrix) => {
    const selectedRow = Array(matrix.length).fill(0);
    const selectedColumn = Array(matrix[0].length).fill(0);

    // matrix has been marked
    for(let i=0;i<matrix.length;i++) {
        for(let j=0;j<matrix[0].length;j++) { 
            if(matrix[i][j] === 0) {
                selectedRow[i] = 1;
                selectedColumn[j] = 1;
            }
        }
    }

    // now pain the matrix
    for(let i=0;i<selectedRow.length;i++) {
        for(let j=0;j<selectedColumn.length;j++) {
            if(selectedRow[i] === 1) {
                matrix[i][j] = 0;
            }
            if(selectedColumn[j] === 1) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}
console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]])); // [[1,0,1],[0,0,0],[1,0,1]]