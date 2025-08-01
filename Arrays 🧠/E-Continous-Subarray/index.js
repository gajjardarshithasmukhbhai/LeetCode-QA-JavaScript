const continousSubarray = (values) => {
    let result = [];
    for(let i=0;i<values.length;i++) {
        let subArray = "";
        for(let j=i;j<values.length;j++) {
            subArray +=  values[j];
            result.push(subArray);
        }
    }
    return result = Array.from(result).map(values => values.split('').map(Number));
}

console.log(continousSubarray([1,3,2]));

// BrutForce Approach