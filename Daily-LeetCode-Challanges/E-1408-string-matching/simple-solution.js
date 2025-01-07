const stringMatching = words => words.filter(n => {
    return words.some(h => {
        console.log('h: ', h);
        console.log('h: ', n, h !== n);
        return h !== n && h.includes(n)
    })
});
console.log(stringMatching(["awzzjcv", "ezjc", "xtwo", "zzjc", "zjc", "jwx"]));