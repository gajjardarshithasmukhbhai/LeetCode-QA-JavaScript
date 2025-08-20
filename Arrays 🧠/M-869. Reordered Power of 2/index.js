const reorderedPowerOf2 = (n) => {
    let sortedNum = n.toString().split('').sort((a,b) => a-b).join('');

    let isCheck = true;
    let count = 0;
    while(isCheck) {
        let value = Math.pow(2,count).toString().split('').sort((a,b) => a-b).join('');
        if(value === sortedNum) {
            isCheck = false;
            return true;
        }
        if(value.length>sortedNum.length) {
            isCheck = false;
            return false;
        }
        count++;
    }
};
