const rotate = (matrix) => {
    // First Traversal the metrix

    for(let i=0;i<matrix.length;i++) {
        for(let j=i+1;j<matrix.length;j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // reverse the each row

    for(let i=0; i<matrix.length;i++) {
        matrix[i].reverse();
    }

    return matrix;
};