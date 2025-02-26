const tasks = [[1, 22, 10], [21, 34, 45]];

// We come from bottom to top
const ninjaTraining = (tasks) => {
    const helper = (day, last) => {
        if (day === 0) {
            let maxValue = 0;
            for (let i = 0; i < tasks[0].length; i++) {
                if (i !== last) {
                    maxValue = Math.max(maxValue, tasks[0][i]);
                }
            }
            return maxValue;
        }

        let maxRowValue = 0;
        for (let j = 0; j < tasks[0].length; j++) {
            if (j !== last) {
                let maxValue = tasks[day][j] + helper(day - 1, j);
                maxRowValue = Math.max(maxRowValue, maxValue);
            }
        }
        return maxRowValue;
    };

    return helper(tasks.length - 1, 0);
};

console.log(ninjaTraining(tasks)); // O/P: 67
