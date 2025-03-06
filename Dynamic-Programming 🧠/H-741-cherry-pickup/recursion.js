const cherryPickup = function(grid) {
  
    let cherryPickupCount = 0;
    const helper = (row, column) => {

        if(row === 0 && column === 0) {
            return grid[row][column];
        }

        if(row > 0 || row < 0 || column < 0 || column > grid[0].length-1) {
            return 0;
        }

        let cherries = grid[row][column];
        grid[row][column] = 0; // Mark as completed

        let left = helper(row, column-1);
        let up = helper(row-1, column);

        return cherries + Math.max(left, up);
    }


    let bottomTopPickUp = helper(grid.length-1, grid[0].length-1);
    cherryPickup += bottomTopPickUp;

    let helper2 = (row, column) => {
        if (row >= grid.length || column >= grid[0].length) {
            return 0;
        }

        if (row === grid.length - 1 && column === grid[0].length - 1) {
            return grid[row][column];
        }

        let cherries = grid[row][column];
        grid[row][column] = 0;

        let right = helper2(row, column + 1);
        let down = helper2(row + 1, column);

        return cherries + Math.max(right, down);
    };

    let TopBottomPickUp = helper2(0,0);
    cherryPickup += TopBottomPickUp;

    return cherryPickup;
};