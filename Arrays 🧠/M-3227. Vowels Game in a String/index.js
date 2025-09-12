/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    var vowels = ['a','e','i','o','u','A','E','I','O','U'];
    var count = 0;

    for (var i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            count++;
        }
    }
    
    if(count === 0) {
        return false;
    }

    return true;
};