const areaOfMaxDiagonal = (dimensions) => {
    let result = 0;
    let maxNum = 0;
    for(let i=0;i<dimensions.length;i++) {
        let area = dimensions[i][0] * dimensions[i][1];

        if(maxNum < Math.sqrt(Math.pow(dimensions[i][0],2)+Math.pow(dimensions[i][1],2)) || (Math.sqrt(Math.pow(dimensions[i][0],2)+Math.pow(dimensions[i][1],2)) === maxNum && area > result)) {
            maxNum = Math.max(maxNum, Math.sqrt(Math.pow(dimensions[i][0],2) + Math.pow(dimensions[i][1],2)));
            result = dimensions[i][0]*dimensions[i][1];
        }
    }
    return result;
};
