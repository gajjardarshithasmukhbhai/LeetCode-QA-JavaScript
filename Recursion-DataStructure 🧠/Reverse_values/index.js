const myNumber = [1, 2, 3, 4, 5];

const swapNumber = (myValue, count = 0, result = [...myValue]) => {
    if (count >= Math.floor(myValue.length / 2)) {
        return result;
    }
    let temp = result[count];
    result[count] = result[myValue.length - 1 - count];
    result[myValue.length - 1 - count] = temp;
    swapNumber(myValue, count + 1, result);
    return result;
}
console.log(swapNumber(myNumber)); // O/P: [5, 4, 3, 2, 1]