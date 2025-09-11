const sortVowels = (string) => {
    const normalChar  = [];
    const vowelsList = [];
    const vowels = ["a","e", "i", "o","u", "A","E", "I", "O","U"];
    for(let nonVowel = 0; nonVowel<string.length;nonVowel++) {
        if(!vowels.includes(string[nonVowel])) {
            normalChar.push(string[nonVowel]);
        }
        else {
            normalChar.push(0);
            vowelsList.push(string[nonVowel]);
        }
    }

    vowelsList.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0));

    let vIndex = 0;
    for(let i=0;i<string.length;i++) {
        if(normalChar[i] === 0) {
            normalChar[i] = vowelsList[vIndex++];
        }
    }
    return normalChar.join("");
};