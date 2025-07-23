const s = "cdbcbbaaabab"; 
const x = 4; 
const y = 5;

const maximumGain = (s, x, y) => {
    const firstStack = [];
    const secondStack = [];
    let result = 0;

    const first = x>=y ? "ab": "ba";
    const second = x>=y ? "ba": "ab";

    const firstScore = x>=y ? x: y;
    const secondScore = x>=y ? y: x;
    
    // First Score Remove
    for(let i=0;i<s.length;i++) {
        if(firstStack.length && firstStack[firstStack.length-1] === first[0] && s[i] === first[1]) {
            firstStack.pop();
            result += firstScore;
        }else{
            firstStack.push(s[i]);
        }
    }

    // second score remove

    for(let i=0;i<s.length;i++) {
        if(secondStack.length && secondStack[secondStack.length-1] === second[0] && firstStack[i] === second[1]) {
            secondStack.pop();
            result += secondScore;
        }
        else {
            secondStack.push(firstStack[i]);
        }
    }


    // second Score Remove
    return result;
};

console.log(maximumGain(s,x,y));