var stringMatching = function (words) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            console.log(' ', words[j]);
            if (words[j].includes(words[i]) && !result.includes(words[i])) {
                result.push(words[i])
            }
            if (words[i].includes(words[j]) && !result.includes(words[j])) {
                result.push(words[j])
            }
        }
    }
    return result
};
console.log(stringMatching(["awzzjcv", "ezjc", "xtwo", "zzjc", "zjc", "jwx"]));