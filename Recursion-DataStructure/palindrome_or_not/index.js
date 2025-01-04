const str = "aba";

const isPalindromeOrNot = (str, count = 0) => {

    if (count < Math.floor(str.length / 2)) {
        if (str[count] !== str[str.length - 1 - count]) {
            return false;
        }
        return isPalindromeOrNot(str, count + 1);
    }

    return true;
}

console.log(isPalindromeOrNot(str));