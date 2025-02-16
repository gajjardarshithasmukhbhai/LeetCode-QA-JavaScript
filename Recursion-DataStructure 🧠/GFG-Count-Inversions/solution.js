const countInversionsSet = [5, 3, 2, 4, 1];

const countInversions = (values) => {

    const result = [];
    const copyValues = [...values];
    // O(n) TC
    const descStack = values.sort((a, b) => b - a)
    // store O(n) TC in Values 
    const ascStack = copyValues.sort((a, b) => a - b);

    let i = 0;
    let j = 0;

    while (j < values.length) {
        if (descStack[j] === ascStack[i]) {
            j++;
            i = 0;
        }
        if (descStack[j] > ascStack[i]) {
            result.push([descStack[j], ascStack[i]]);
            i++;
        }
    }
    return result;
}
console.log(countInversions(countInversionsSet));