const printFibonacciSeries = (valueInput) => {
    let result = [];
    let value = 0;

    const helper = (myNum) => {

        if (myNum === 0) {
            return [0];
        }
        if (myNum == 1) {
            return [0, 1]
        }
        const series = helper(myNum - 1);
        series.push(series[series.length - 1] + series[series.length - 2]);
        return series;
    }
    return helper(valueInput);
}
console.log(printFibonacciSeries(5));
