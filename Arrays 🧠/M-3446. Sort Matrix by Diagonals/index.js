const sortMatrix = (grid) => {
    let diagonalMatrix = new Map();
    let result = Array.from({length: grid.length}, () => Array.from({length: grid[0].length}).fill(0));
    console.log('result: ', result);

    for(let i=0;i<grid.length;i++) {
        for(let j=0;j<grid[0].length;j++) {
            diagonalMatrix.set(i-j, [...diagonalMatrix.get(i-j) || [], grid[i][j]]);
        }
    }
    
    
    for (let [key, elements] of diagonalMatrix) {
        if(key>=0) {
            diagonalMatrix.set(key, elements.sort((a,b)=> b-a));
        }else {
            diagonalMatrix.set(key, elements.sort((a,b)=> a-b));
        }
    }
    console.log('Matrix: ', diagonalMatrix);

    for(let i=0;i<result.length;i++) {
        for(let j=0;j<result[0].length;j++) {
            let removedEle = diagonalMatrix.get(i-j).shift();
            result[i][j] = removedEle;
        }
    }
    return result;
};