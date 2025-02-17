const climbStairs = function (n) {
    let wayToStairs = 0;

    const helper = (numValue) => {
        if (numValue === 0) {
            wayToStairs++;
            return;
        }
        // this is the EDGE case, bcz from primary value => -2 minus => so -1 value happens
        if (numValue < 0) {
            return;
        }
        helper(numValue - 1);
        helper(numValue - 2);
    };

    helper(n);
    return wayToStairs;
};

console.log(climbStairs(3)); // Output: 2
