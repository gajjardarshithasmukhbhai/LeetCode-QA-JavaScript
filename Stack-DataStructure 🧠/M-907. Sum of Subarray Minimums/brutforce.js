const sumSubarrayMins = (arr) => {
    let min = 0;
    let result = 0;
    for(let i=0;i<arr.length;i++) {
        min = arr[i];
        for(let j=i;j<arr.length;j++) {
            min = Math.min(min,arr[j]);
            result += min;
        }
    }
    return result;
};

console.log(sumSubarrayMins([3,1,2,4]));