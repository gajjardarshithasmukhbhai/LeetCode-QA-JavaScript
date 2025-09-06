const input = { "x.y.z": 10, "x.s": 5 };
// {x: {y: {z:10}},s: value}

const result = (inputValue) => {
        let result = {}; 
        for (let key in input) {
            let stringSplit = key.split('.');
            
            let nestedKey = result; 
            for(let i=0;i<stringSplit.length;i++) {
                if(i === stringSplit.length-1) {
                    nestedKey[stringSplit[i]] = inputValue[key];
                }
                else {
                    nestedKey[stringSplit[i]] = nestedKey[stringSplit[i]] || {};
                    nestedKey = nestedKey[stringSplit[i]];
                }
            }
        }
    console.log(result);        
}
console.log(result(input));