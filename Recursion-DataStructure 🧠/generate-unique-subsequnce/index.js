const generateSubsequneSum = (array, targetValue) => {
    const result = new Set();
    const helper = (index, current, sumValue) => {
        
        if(index === array.length) {
            if(sumValue === targetValue) {
                result.add(JSON.stringify(current));
                return;
            }
            return
        }
        
        current.push(array[index]);
        sumValue +=array[index];
        helper(index+1, current, sumValue);
        current.pop();
        sumValue -= array[index];
        helper(index+1, current, sumValue);
    }
    helper(0, [], 0);
    return Array.from(result).map(value => JSON.parse(value));
}

console.log(generateSubsequneSum([1,2,2,1,3], 3));

