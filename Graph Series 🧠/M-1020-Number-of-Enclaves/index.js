/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const vis = Array.from({ length: n }, () => Array(m).fill(0));

    let directions = [ 
        { dr: -1, dc: 0 },  // up
        { dr: 1, dc: 0 },   // down
        { dr: 0, dc: -1 },  // left
        { dr: 0, dc: 1 }    // right
    ];

    const dfs = (row, col) => {
        vis[row][col] = 1;

        for (let dir of directions) {
            const nrow = row + dir.dr;
            const ncol = col + dir.dc;

            if (
                nrow >= 0 && nrow < n &&
                ncol >= 0 && ncol < m &&
                !vis[nrow][ncol] &&
                grid[nrow][ncol] === 1
            ) {
                dfs(nrow, ncol);
            }
        }
    };

    // Traverse first and last row
    for (let j = 0; j < m; j++) {
        if (!vis[0][j] && grid[0][j] === 1) {
            dfs(0, j);
        }
        if (!vis[n - 1][j] && grid[n - 1][j] === 1) {
            dfs(n - 1, j);
        }
    }

    // Traverse first and last column
    for (let i = 0; i < n; i++) {
        if (!vis[i][0] && grid[i][0] === 1) {
            dfs(i, 0);
        }
        if (!vis[i][m - 1] && grid[i][m - 1] === 1) {
            dfs(i, m - 1);
        }
    }

    // Count unvisited land cells (enclaves)
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!vis[i][j] && grid[i][j] === 1) {
                count++;
            }
        }
    }

    return count;
};
