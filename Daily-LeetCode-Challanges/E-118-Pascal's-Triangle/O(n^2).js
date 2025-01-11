Formula Recap:
The iterative formula for computing binomial coefficients is:

    // C(k, r + 1) = C(k, r)⋅𝑘−𝑟 / r + 1
    // C(k, r + 1) = C(k, r)⋅ r + 1k-r

    var getRow = function (rowIndex) {
        const row = [1]; // First element is always 1

        for (let i = 1; i <= rowIndex; i++) {
            // Calculate the next element using the binomial relationship
            console.log(row);
            row.push(row[row.length - 1] * (rowIndex - i + 1) / i);
        }

        return row;
    };

console.log(getRow(2));

var generate = function (numRows) {
    const result = [[1]];
    if (numRows < 3) {
        return result.slice(0, numRows);
    }

    else {
        for (let i = 2; i < numRows; i++) {
            let value = [1];
            let i = 0;
            let j = i + 1;
            let lastValue = result[result.length - 1];
            while (j < lastValue.length) {
                value.push(lastValue[i] + lastValue[j]);
                i++;
                j++;
            }
            value.push(1);
            result.push(value);
        }
    }
    return result
};
console.log(generate(2));