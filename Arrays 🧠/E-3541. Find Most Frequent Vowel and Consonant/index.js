const maxFreqSum = (s) => {
    let vowels = ["a", "e", "i", "o", "u"];
    let vowelFreq = new Map();
    let consonantFreq = new Map();

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            vowelFreq.set(s[i], (vowelFreq.get(s[i]) || 0) + 1);
        } else {
            consonantFreq.set(s[i], (consonantFreq.get(s[i]) || 0) + 1);
        }
    }

    let vowelValues = [...vowelFreq.values()];
    let consonantValues = [...consonantFreq.values()];

    let maxVowel = vowelValues.length > 0 ? Math.max(...vowelValues) : 0;
    let maxConsonant = consonantValues.length > 0 ? Math.max(...consonantValues) : 0;

    return maxVowel + maxConsonant;
};
