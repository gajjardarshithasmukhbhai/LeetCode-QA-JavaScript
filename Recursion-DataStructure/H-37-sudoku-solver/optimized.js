
const solveSudoku = (board) => {
    const isValid = (board, row, col, num) => {
        // we need to check either in 3*3 matrix that value present or not
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        // 3*3 Logic 
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[startRow + i][startCol + j] === num) return false;
            }
        }

        // row checking means in row that number is present or not
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num) return false;
        }

        // row checking for vertical part
        for (let j = 0; j < 9; j++) {
            if (board[j][col] === num) return false;
        }

        return true;
    }

    const helper = () => {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === '.') {
                    for (let myNum = 1; myNum < 10; myNum++) {
                        let numStr = String(myNum);
                        if (isValid(board, i, j, numStr)) {
                            board[i][j] = numStr;
                            if (helper()) {
                                return true;
                            }
                            board[i][j] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    helper();
    return board;
};

const value = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
console.log(solveSudoku(value));

// Array(9) [
//     Array(9) [ '5', '3', '4', '6', '7', '8', '9', '1', '2' ],
//     Array(9) [ '6', '7', '2', '1', '9', '5', '3', '4', '8' ],
//     Array(9) [ '1', '9', '8', '3', '4', '2', '5', '6', '7' ],
//     Array(9) [ '8', '5', '9', '7', '6', '1', '4', '2', '3' ],
//     Array(9) [ '4', '2', '6', '8', '5', '3', '7', '9', '1' ],
//     Array(9) [ '7', '1', '3', '9', '2', '4', '8', '5', '6' ],
//     Array(9) [ '9', '6', '1', '5', '3', '7', '2', '8', '4' ],
//     Array(9) [ '2', '8', '7', '4', '1', '9', '6', '3', '5' ],
//     Array(9) [ '3', '4', '5', '2', '8', '6', '1', '7', '9' ]
//   ]