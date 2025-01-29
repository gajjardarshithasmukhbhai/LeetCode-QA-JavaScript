/**
 * @param {number} n
 * @return {string[][]}
 */
const n = 4;

function solveNQueens(n) {
    const result = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    function isSafe(row, col) {
        // Check this row on left side
        for (let i = 0; i < col; i++) {
            if (board[row][i] === 'Q') return false;
        }

        // Check upper diagonal on left side
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }

        // Check lower diagonal on left side
        for (let i = row, j = col; i < n && j >= 0; i++, j--) {
            if (board[i][j] === 'Q') return false;
        }

        return true;
    }

    function backtrack(col) {
        if (col === n) {
            result.push(board.map(row => row.join('')));
            return;
        }

        for (let i = 0; i < n; i++) {
            if (isSafe(i, col)) {
                board[i][col] = 'Q'; // Place the queen
                backtrack(col + 1);  // Recur to place the rest of the queens
                board[i][col] = '.'; // Backtrack
            }
        }
    }

    backtrack(0);
    return result;
}
console.log(solveNQueens(4));