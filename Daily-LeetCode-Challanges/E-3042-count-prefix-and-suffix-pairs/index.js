var countPrefixSuffixPairs = (words) => {
    let count = 0;
    const isPrefixAndSuffix = (str1, str2) => {
        return (str2.startsWith(str1) && str2.endsWith(str1))
    }

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[i].length > words[j].length) {
                continue;
            }
            else {
                if (isPrefixAndSuffix(words[i], words[j])) {
                    count++;
                }
            }
        }
    }
    return count;
};
console.log(countPrefixSuffixPairs(["a", "aba", "ababa", "aa"])); //O/P => 4