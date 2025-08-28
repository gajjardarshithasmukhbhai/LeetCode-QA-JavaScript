const removeDuplicateLetters = (s) => {
    let monotonicStack = [];
    let visited = new Set();          // track if char is already in stack
    let freq = {};                     // frequency counter

    // count frequencies of each character
    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        freq[ch]--;  // use this occurrence

        // if already in stack, skip
        if (visited.has(ch)) continue;

        // while stack not empty and top is bigger and still appears later
        while (
            monotonicStack.length > 0 &&
            ch < monotonicStack[monotonicStack.length - 1] &&
            freq[monotonicStack[monotonicStack.length - 1]] > 0
        ) {
            visited.delete(monotonicStack.pop());  // unmark popped char
        }

        monotonicStack.push(ch);
        visited.add(ch);
    }

    return monotonicStack.join("");
};