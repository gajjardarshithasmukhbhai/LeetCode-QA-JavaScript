// Image is nothing but Matrix list
// Sr means --> Row of the matrix
// Sc means --> Column of the matrix
// Color --> Color means that change in the matrix

    
const floodFill = (image, sr, sc, newColor) => {
    
    const imageCopy = [...image];
    const initColor = image[sr][sc];

    let directions = [ 
        { dr: -1, dc: 0 },  // up
        { dr: 1, dc: 0 },   // down
        { dr: 0, dc: -1 },  // left
        { dr: 0, dc: 1 }    // right
    ];

    const dfs = (ans, row, col, image) => {

        if(row < 0 || col < 0 || row >=image.length || col >= image[0].length) return;
        
        if(initColor !==image[row][col]) return;

        if(ans[row][col] === newColor) return; 

        ans[row][col] = newColor;
        for(let i=0; i < directions.length; i++) {

            let checkRow = row + directions[i].dr;
            let checkCol = col + directions[i].dc;

            dfs(ans, checkRow, checkCol, image);
        }
    }
    dfs(imageCopy, sr, sc, image);
    return imageCopy;
};
