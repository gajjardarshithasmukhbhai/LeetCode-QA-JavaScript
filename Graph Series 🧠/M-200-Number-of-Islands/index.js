/**
 * @param {character[][]} grid
 * @return {number}
 */
const bfsForGraph = (row, col, visitedNode, grid) => {
    visitedNode[row][col] = 1;

    let q = [];
    q.push({ row: row, col: col });

    // 4-directional movement
    let directions = [ 
        { dr: -1, dc: 0 },  // up
        { dr: 1, dc: 0 },   // down
        { dr: 0, dc: -1 },  // left
        { dr: 0, dc: 1 }    // right
    ];

    while (q.length > 0) {
        let current = q.shift();
        let removedRow = current.row;
        let removedColumn = current.col;

        for (let i = 0; i < directions.length; i++) {
            let nrow = removedRow + directions[i].dr;
            let ncol = removedColumn + directions[i].dc;

            if (nrow >= 0 && ncol >= 0 && nrow < grid.length && ncol < grid[0].length) {
                if (!visitedNode[nrow][ncol] && grid[nrow][ncol] === '1') {
                    visitedNode[nrow][ncol] = 1;
                    q.push({ row: nrow, col: ncol });
                }
            }
        }
    }
}

const numIslands = (grid) => {
    let count = 0;
    let rows = grid.length;
    let cols = grid[0].length;

    // Initialize 2D visited array
    let visited = new Array(rows);
    for (let i = 0; i < rows; i++) {
        visited[i] = new Array(cols).fill(0);
    }

    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < cols; column++) {
            if (!visited[row][column] && grid[row][column] === '1') {
                bfsForGraph(row, column, visited, grid);
                count++;
            }
        }
    }

    return count;
};
