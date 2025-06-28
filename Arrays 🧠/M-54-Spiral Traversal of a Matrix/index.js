const spiralOrder = (matrix) => {
    let left = 0;
    let right = matrix[0].length-1;
    let bottom = matrix.length-1;
    let top = 0;
    let result = [];

    while(left <=right && top <=bottom) {
        // Left --> Right
        for(let i=left; i<=right; i++) {
            result.push(matrix[top][i]);
        }
        top++;
        // Top --> Bottom
        for(let j=top; j<=bottom;j++) {
            result.push(matrix[j][right]);
        }

        // Bottom -->Left
        right--;     
        if(top<=bottom) {
            for(let k=right;k>=left;k--) {
                result.push(matrix[bottom][k]);
            }
            bottom--;
        }
        // Bottom --> Top
        if(left<=right) {
            for(let m=bottom; m>=top;m--) {
                result.push(matrix[m][left]);
            }
            left++;
        }
    }
    return result;
};