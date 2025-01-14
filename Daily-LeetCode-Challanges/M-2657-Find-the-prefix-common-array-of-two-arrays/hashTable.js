/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    let count = 0;
    let elementUnique = new Map();
    let result = [];
    for (let i = 0; i < A.length; i++) {

        elementUnique.set(A[i], (elementUnique.get(A[i]) || 0) + 1);

        if (elementUnique.get(A[i]) === 2) {
            count++;
        }

        elementUnique.set(B[i], (elementUnique.get(B[i]) || 0) + 1);

        if (elementUnique.get(B[i]) === 2) {
            count++;
        }

        result[i] = count;
    }
    return result;
};