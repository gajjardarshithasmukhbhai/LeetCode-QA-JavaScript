/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (values) => {
    if(values.length === 0) {
        return 0;
    }
    // tweak the code with sorted order
    values.sort((a,b) => a-b);
    
    let firstNum = values[0];
    
    let resultOfConsecutive = 1;
    let consecutiveStreak = 1;
    for(let i=1; i<values.length; i++) {
        console.log('values[i]: ', values[i], firstNum);
        if(values[i]-firstNum === 1) {
            ++consecutiveStreak;
            resultOfConsecutive = Math.max(resultOfConsecutive, consecutiveStreak);
        }

        else if(values[i]!==firstNum) {
            consecutiveStreak = 1;
        }
        firstNum = values[i];
    }
    return resultOfConsecutive;
}