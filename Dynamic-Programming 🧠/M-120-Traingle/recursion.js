const minimumTotal = (triangle) => {  
    const helper = (m, n) => {
        if(m === triangle.length-1) {
            return triangle[m][n];
        }
        // Out Of Bound Base Condition
        if(m >= triangle.length || n >= triangle[m].length) {
            return Infinity;
        }

        let down = helper(m+1,n);
        let diagonal = helper(m+1, n+1);
        let result = triangle[m][n] + Math.min(down, diagonal);

        return result;
    }
    return helper(0,0);
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])); //11

