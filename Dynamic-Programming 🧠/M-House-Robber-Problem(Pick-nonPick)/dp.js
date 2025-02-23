const homeList = [2,3,2,4,6];

const maximumNonAdjacentSum = (values) => {

   const memoizaion = Array(values.length).fill(-1);

   const helper = (values, index) => {

    // base condition
    if(index >= values.length) {
        return 0;
    }

    let pick = values[index] + helper(values, index+2);
    let nonPick = helper(values, index+1);

    memoizaion[index] = Math.max(pick, nonPick);
    return memoizaion[index];
   }

   // this removed the last element 
   let result1 = helper(values.slice(0, values.length-1),0)
   
   // this removed the first element
   let result2 = helper(values.slice(1),0)

   return Math.max(result1, result2);
}

console.log(maximumNonAdjacentSum(homeList));