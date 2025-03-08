const grid = [[3,1,1],[2,5,1],[1,5,5],[2,1,1]];

const cherryPickupII = (listOfValues) => {

    const helper = (row, aliceCol, bobCol) => {
        if(row > listOfValues.length-1 || aliceCol > listOfValues[0].length-1 || aliceCol < 0 || bobCol < 0 || bobCol > listOfValues[0].length-1) {
            return -Infinity;
        }
        if(row === listOfValues.length-1) {
            if(aliceCol === bobCol) {
                return listOfValues[row][aliceCol];
            }
            else {
                return listOfValues[row][aliceCol] + listOfValues[row][bobCol];
            }
        }

        // Here we're adding the Alice Chocolate adding and also add the bob chocolate
        let chocolate = listOfValues[row][aliceCol];
        if(aliceCol!==bobCol) {
            chocolate += listOfValues[row][bobCol];
        }

        let maxChocolate = 0;
        // Put the -1, 0 and 1 Because ==> Left side move, down move and Right side move
        for(let aliceMovement of [-1,0,1]) {
            for(let bobMovement of [-1,0,1]) {
                maxChocolate = Math.max(maxChocolate, helper(row+1, aliceCol+aliceMovement, bobCol+bobMovement));
            }
        }
        return maxChocolate + chocolate;
   }
   return helper(0, 0, listOfValues[0].length-1)
}

console.log(cherryPickupII(grid));