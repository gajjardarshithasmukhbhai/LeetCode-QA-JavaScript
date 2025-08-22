const minimumArea = (grid) => {
    let minRow = Infinity;
    let minColumn = Infinity;
    let maxRow = -Infinity;
    let maxColumn = -Infinity;

    for(let i=0;i<grid.length;i++) {
        for(let j=0;j<grid[0].length;j++) {
            if(grid[i][j] === 1) {
                minRow = Math.min(i, minRow);
                minColumn = Math.min(j, minColumn);
                maxColumn = Math.max(j, maxColumn);
                maxRow = Math.max(i, maxRow);
            }
        }
    }
    return (maxRow-minRow+1)*(maxColumn-minColumn+1);
};