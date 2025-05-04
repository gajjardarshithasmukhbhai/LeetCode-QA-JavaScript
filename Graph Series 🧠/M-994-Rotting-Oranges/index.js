/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = (grid) => {

    const gridRow = grid.length;
    const gridCol = grid[0].length;

    const emptyArray = Array.from({ length: gridRow }, () => Array(gridCol).fill(0));

    const directions = [{
        dr: 0, dc: -1
    }, {
        dr: 0, dc: 1
    }, {
        dr: -1, dc: 0
    }, {
        dr: 1, dc: 0
    }];

    let q = [];
    // rotten orange put in board
    for (let row = 0; row < gridRow; row++) {
        for (let col = 0; col < gridCol; col++) {
            if (grid[row][col] === 2) {
                q.push({ row: row, col: col, time: 0 });
            }
        }
    }

    let maxTime = 0;

    while (q.length > 0) {
        let current = q.shift();

        emptyArray[current.row][current.col] = 2;
        maxTime = Math.max(maxTime, current.time);

        for (let i = 0; i < directions.length; i++) {
            let removedRow = current.row + directions[i].dr;
            let removedCol = current.col + directions[i].dc;

            if (removedRow >= 0 && removedRow < gridRow &&
                removedCol >= 0 && removedCol < gridCol &&
                grid[removedRow][removedCol] === 1) {

                grid[removedRow][removedCol] = 2;  // mark as rotten
                emptyArray[removedRow][removedCol] = 2;
                q.push({ row: removedRow, col: removedCol, time: current.time + 1 });
            }
        }
    }

    // After BFS, check if any fresh orange left
    for (let row = 0; row < gridRow; row++) {
        for (let col = 0; col < gridCol; col++) {
            if (grid[row][col] === 1) {
                return -1;  // impossible to rot all
            }
        }
    }

    return maxTime;
};
