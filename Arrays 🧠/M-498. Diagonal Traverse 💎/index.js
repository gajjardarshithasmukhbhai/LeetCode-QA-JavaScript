const findDiagonalOrder = (mat) => {
    let matMap = new Map();
    let result = [];
    for(let i=0;i<mat.length;i++) {
        for(let j=0;j<mat[0].length;j++) {
            let values = matMap.get(i+j) || [];
            values.push(mat[i][j]);
            matMap.set(i+j, values);
        }
    }

    for(let [key,value] of matMap) {
        if(key%2!==0) {
            result.push(...value.reverse());
        }
        else {
            result.push(...value);
        }
    }
    return result;
};

console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]));