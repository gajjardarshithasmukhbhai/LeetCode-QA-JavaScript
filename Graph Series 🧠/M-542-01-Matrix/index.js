// Here we used the BFS ==> For Level Ordering

var updateMatrix = function(mat) {
    const m = mat.length;
    const n = mat[0].length;

    let directions = [ 
        { dr: -1, dc: 0 },  // up
        { dr: 1, dc: 0 },   // down
        { dr: 0, dc: -1 },  // left
        { dr: 0, dc: 1 }    // right
    ];

    const result = Array.from({ length: m }, () => Array(n).fill(-1));
    const queue = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                result[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    while (queue.length > 0) {
        const [i, j] = queue.shift();

        for (const { dr, dc } of directions) {
            const newI = i + dr;
            const newJ = j + dc;

            if (newI >= 0 && newI < m && newJ >= 0 && newJ < n && result[newI][newJ] === -1) {
                result[newI][newJ] = result[i][j] + 1;
                queue.push([newI, newJ]);
            }
        }
    }

    return result;
};
