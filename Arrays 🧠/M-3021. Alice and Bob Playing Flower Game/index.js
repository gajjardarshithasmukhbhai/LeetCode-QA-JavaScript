/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
const flowerGame = (n, m) => {
    
    let oddCountN = Math.ceil(n/2);
    let evenCountN = Math.floor(n/2);

    let oddCountM = Math.ceil(m/2);
    let evenCountM = Math.floor(m/2);

    return oddCountM*evenCountN + evenCountM*oddCountN;
};

// New One
const flowerGame = (n, m) => {
    return Math.floor(n*m/2);
};