const str = "abaacbcbb";

const minimumLength = (s) => {
    let uniqueChar = new Map();
    for (let value of s) {
        uniqueChar.set(value, (uniqueChar.get(value) || 0) + 1);
    }
    const value = [...uniqueChar.values()];
    let result = 0;
    for (let sum of value) {
        if (sum % 2 === 0) {
            result += 2
        }
        else {
            result++;
        }
    }
    return result;
};

console.log(minimumLength("aa"));