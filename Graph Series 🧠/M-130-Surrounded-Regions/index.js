/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const n = board.length;
    const m = board[0].length;
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
                board[nrow][ncol] === 'O'
            ) {
                dfs(nrow, ncol);
            }
        }
    };

    // Traverse first and last row
    for (let j = 0; j < m; j++) {
        if (!vis[0][j] && board[0][j] === 'O') {
            dfs(0, j);
        }
        if (!vis[n - 1][j] && board[n - 1][j] === 'O') {
            dfs(n - 1, j);
        }
    }

    // Traverse first and last column
    for (let i = 0; i < n; i++) {
        if (!vis[i][0] && board[i][0] === 'O') {
            dfs(i, 0);
        }
        if (!vis[i][m - 1] && board[i][m - 1] === 'O') {
            dfs(i, m - 1);
        }
    }

    // Replace all unvisited 'O's with 'X'
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!vis[i][j] && board[i][j] === 'O') {
                board[i][j] = 'X';
            }
        }
    }
};
