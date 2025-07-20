const removeKdigits = (num, k) => {
    const monotonicStack = [];
    for(let i=0;i<num.length;i++) {
        while(monotonicStack.length>0 && k!==0 && parseInt(monotonicStack[monotonicStack.length-1]) > num[i]) {
            monotonicStack.pop();
            --k;
        }
        monotonicStack.push(num[i]);
    }

    while(k > 0) {
        monotonicStack.pop();
        k--;
    }
    console.log('monotonicStack.length: ', monotonicStack.length);
    const result = monotonicStack.join('').replace(/^0+/, '');
    return result === '' ? "0": result;
};


console.log(removeKdigits(removeKdigits("10", 2) ));