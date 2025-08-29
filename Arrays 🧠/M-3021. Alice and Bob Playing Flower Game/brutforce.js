/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
const flowerGame = (n, m) => {
    
    let oddCountN = 0;
    let evenCountN = 0;
    let oddCountM = 0;
    let evenCountM = 0;
    // count for m
    for(let i=1;i<=m;i++) {
        if(i%2==0) {
            evenCountM++;
        }
        else{
            oddCountM++;
        }
    }

    // count for n
    for(let j=1;j<=n;j++) {
        if(j%2==0) {
            evenCountN++;
        }else {
          oddCountN++;  
        }
    }
    return oddCountM*evenCountN + oddCountN*evenCount;
};