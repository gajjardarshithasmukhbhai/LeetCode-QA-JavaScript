const partition = (s) => {
    let result = [];

    const isPalindrome = (str) => {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    const backTrack = (start, path) => {
        console.log('path: ', path);
        if (start === s.length) {
            result.push([...path]);
            return;
        }
        for (let end = start + 1; end <= s.length; end++) {
            let substring = s.slice(start, end);

            if (isPalindrome(substring)) {
                path.push(substring);
                backTrack(end, path);
                path.pop();
            }
        }
    }
    backTrack(0, []);
    return result;
}
console.log(partition("aab"));