/**
 * @param {number[][]} mat
 * @return {number}
 */
const numSubmat = (mat) => {
    let count = 0;
    const helper = (row, column) => {
        let total = 0;
        let minHeight = Infinity;

        for(let i=column;i<mat[0].length;i++) {
            if(mat[row][i] === 0) break; 
            let height = 0;
            for(let j=row;j<mat.length && mat[j][i] === 1;j++) {
                ++height;
            }
            minHeight = Math.min(minHeight, height);
            total +=minHeight;
        }
        return total;
    }
    for(let i=0; i<mat.length;i++) {
        for(let j=0;j<mat[0].length;j++) {
            if(mat[i][j] === 1) {
                count +=helper(i, j);
            }
        }   
    }
    return count;
};