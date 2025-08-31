const isValidSudoku = (board) => {
    //row should not repeat
    for(let row=0;row<board.length;row++) {
        let value = new Set();
        for(let col=0;col<board[0].length;col++) {
            if(value.has(board[row][col])) {
                return false;
            }
            if(board[row][col]!==".") {
                value.add(board[row][col]);
            }
        }
    }

    //col should not repeat
    for(let col=0;col<board[0].length;col++) {
        let colValue = new Set();
        for(let row=0;row<board.length;row++) {
            if(colValue.has(board[row][col])) {
                return false;
            }
            if(board[row][col]!==".") {
                colValue.add(board[row][col]);
            }
        }
    }
    
    // 3*3 matrix of Sudoku
    for(let row=0;row<board.length;row=row+3) {
        let startingRow = row;
        let endingRow = row+3;
        for(let column=0;column<board[0].length;column=column+3) {
            let startingCol = column;
            let endingCol = column+3;
            let threeByThreeMatrix = new Set();
            for(let startRow=startingRow; startRow<endingRow;startRow++) {
                for(let startCol=startingCol; startCol<endingCol; startCol++) {
                    if(threeByThreeMatrix.has(board[startRow][startCol]))  {
                        return false;
                    }
                    if(board[startRow][startCol]!==".") {
                        threeByThreeMatrix.add(board[startRow][startCol]);
                    }
                }
            }
        }
    }
    return true;
};
