## Approach: Find the Prefix Common Array of Two Arrays (LeetCode 2657)

### Problem Statement

Given two integer arrays `A` and `B` of the same length, the goal is to find the prefix common array. For each index `i`, the prefix common array is defined as the count of integers that appear in both `A[0..i]` and `B[0..i]`.

---

### Solution: Map-based Frequency Count

The algorithm uses a `Map` data structure to track the frequency of elements as they are encountered in both arrays. The key insight is that when an element has been encountered twice (once from `A` and once from `B`), it contributes to the prefix common count.

---

### Steps

1. **Initialize Variables:**

   - A variable `count` to track the number of common elements.
   - A `Map` named `elementUnique` to store the frequency of elements.
   - An array `result` to store the prefix common count for each index.

2. **Iterate Through Arrays:**

   - For each index `i`, process the elements `A[i]` and `B[i]`:
     - Increment the frequency of `A[i]` in `elementUnique`.
     - If the frequency of `A[i]` becomes 2, increment `count` as it is now common.
     - Repeat the same process for `B[i]`.

3. **Store Result:**

   - Append the current value of `count` to the `result` array.

4. **Return the Result:**
   - Once all indices are processed, return the `result` array.

---

### Code Implementation

```javascript
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  let count = 0; // Count of common elements
  let elementUnique = new Map(); // Tracks frequency of elements
  let result = []; // Result array for prefix common counts

  for (let i = 0; i < A.length; i++) {
    // Process A[i]
    elementUnique.set(A[i], (elementUnique.get(A[i]) || 0) + 1);
    if (elementUnique.get(A[i]) === 2) {
      count++; // Increment count when A[i] becomes common
    }

    // Process B[i]
    elementUnique.set(B[i], (elementUnique.get(B[i]) || 0) + 1);
    if (elementUnique.get(B[i]) === 2) {
      count++; // Increment count when B[i] becomes common
    }

    // Store current count in result
    result[i] = count;
  }

  return result;
};
```

## Complexity Analysis

- **Time Complexity:** O(n), where n is the length of the arrays A and B. Each element is processed once.
- **Space Complexity:** O(u), where u is the number of unique elements in A and B combined, for the Map.

## Example Walkthrough

- Input:

```javascript
Copy code
A = [1, 2, 3, 4]
B = [3, 4, 1, 2]
```

- Process:
- At i = 0: A[0] = 1, B[0] = 3

1. count = 0 (No common elements yet).

- result = [0].
- At i = 1: A[1] = 2, B[1] = 4

2. count = 0 (Still no common elements).

- result = [0, 0].
- At i = 2: A[2] = 3, B[2] = 1

3. count = 2 (1 and 3 are now common).

- result = [0, 0, 2].
- At i = 3: A[3] = 4, B[3] = 2

4. count = 4 (All elements are now common).

- result = [0, 0, 2, 4].
