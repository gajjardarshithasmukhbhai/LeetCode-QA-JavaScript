const setZeroes = (matrix) => {
    const m = matrix.length;
    const n = matrix[0].length;

    let firstRowZero = false;
    let firstColZero = false;

    // Step 1: check if first row or first column has any 0
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) firstColZero = true;
    }

    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) firstRowZero = true;
    }

    // Step 2: mark zeros on first row and column
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Step 3: zero out cells based on marks
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Step 4: zero out first row and column if needed
    if (firstRowZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    if (firstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
};
