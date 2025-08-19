/**
 * @param {number[][]} fruits
 * @return {number}
 */
const maxCollectedFruits = (fruits) => {
    // First Child
    const collectedFruits = () => {
        let ans = 0;
        for (let i = 0; i < fruits.length; i++) {
            ans += fruits[i][i];
            fruits[i][i] = 0;
        }
        return ans;
    };

    // Second Child
    const helper1 = (row, column) => {
        if (row < 0 || row >= fruits.length || column < 0 || column >= fruits.length) {
            return 0;
        }

        if (row === fruits.length - 1 && column === fruits.length - 1) {
            return 0;
        }

        if (row === column || row > column) {
            return 0;
        }

        let maxFruits = fruits[row][column];

        let leftDiagonal  = helper1(row + 1, column - 1);
        let downDiagonal  = helper1(row + 1, column);
        let rightDiagonal = helper1(row + 1, column + 1);

        return maxFruits + Math.max(leftDiagonal, downDiagonal, rightDiagonal);
    };

    // Third Child
    const helper2 = (row, column) => {
        if (row < 0 || row >= fruits.length || column < 0 || column >= fruits.length) {
            return 0;
        }

        if (row === fruits.length - 1 && column === fruits.length - 1) {
            return 0;
        }

        if (row === column || column > row) {
            return 0;
        }

        let maxFruits = fruits[row][column];

        let topCorner   = helper2(row - 1, column + 1);
        let right       = helper2(row, column + 1);
        let rightCorner = helper2(row + 1, column + 1);

        return maxFruits + Math.max(topCorner, right, rightCorner);
    };

    let value1 = collectedFruits();
    let value2 = helper1(0, fruits[0].length - 1);
    let value3 = helper2(fruits.length - 1, 0);

    return value1 + value2 + value3;
};



/**
 * @param {number[][]} fruits
 * @return {number}
 */
const maxCollectedFruits = (fruits) => {
    const n = fruits.length;

    // First Child
    const collectedFruits = () => {
        let ans = 0;
        for (let i = 0; i < n; i++) {
            ans += fruits[i][i];
            fruits[i][i] = 0; // collected fruits removed
        }
        return ans;
    };

    // DP tables
    const t1 = Array.from({ length: n }, () => Array(n).fill(-1));
    const t2 = Array.from({ length: n }, () => Array(n).fill(-1));

    // Second Child (above diagonal)
    const helper1 = (row, column) => {
        if (row < 0 || row >= n || column < 0 || column >= n) return 0;

        if (row === n - 1 && column === n - 1) return 0;
        if (row === column || row > column) return 0;

        if (t1[row][column] !== -1) return t1[row][column];

        let maxFruits = fruits[row][column];

        let leftDiagonal  = helper1(row + 1, column - 1);
        let downDiagonal  = helper1(row + 1, column);
        let rightDiagonal = helper1(row + 1, column + 1);

        return (t1[row][column] = maxFruits + Math.max(leftDiagonal, downDiagonal, rightDiagonal));
    };

    // Third Child (below diagonal)
    const helper2 = (row, column) => {
        if (row < 0 || row >= n || column < 0 || column >= n) return 0;

        if (row === n - 1 && column === n - 1) return 0;
        if (row === column || column > row) return 0;

        if (t2[row][column] !== -1) return t2[row][column];

        let maxFruits = fruits[row][column];

        let topCorner   = helper2(row - 1, column + 1);
        let right       = helper2(row, column + 1);
        let rightCorner = helper2(row + 1, column + 1);

        return (t2[row][column] = maxFruits + Math.max(topCorner, right, rightCorner));
    };

    // Run three children
    let value1 = collectedFruits();
    let value2 = helper1(0, n - 1);
    let value3 = helper2(n - 1, 0);

    return value1 + value2 + value3;
};
