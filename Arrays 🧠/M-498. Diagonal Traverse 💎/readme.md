# 498. Diagonal Traverse

## Problem Statement
Given a matrix, return all elements of the matrix in diagonal order as described in Leetcode 498.

## Approach

### Ninja Technique: Group by `i + j`
- Each element at position `(i, j)` belongs to the diagonal with key `i + j`.
- Store elements of each diagonal in a map with key `i + j`.

### Traversal Order
- For each diagonal:
  - If the diagonal index is even, append elements as is.
  - If the diagonal index is odd, reverse the elements before appending.

### Steps
1. Iterate through the matrix and group elements by `i + j`.
2. Traverse the diagonals in order, reversing as needed.
3. Collect the result.

## Example

Input:
```
[[1,2,3],
 [4,5,6],
 [7,8,9]]
```

Output:
```
[1,2,4,7,5,3,6,8,9]
```

## Code

See [`index.js`](./index.js) for implementation.

## Visualization

![Diagonal Traverse Visualization](./diagram.png)

## Key Points
- Efficient grouping using `i + j`.
- Reverse each diagonal array based on its index for correct order.

---

### Alternate Technique: Group by `i - j` (Anti-Diagonal Traversal)
- Each element at position `(i, j)` belongs to the anti-diagonal with key `i - j`.
- Store elements of each anti-diagonal in a map with key `i - j`.

#### Traversal Order
- For each anti-diagonal:
  - If the anti-diagonal index is even, append elements as is.
  - If the anti-diagonal index is odd, reverse the elements before appending.

#### Steps
1. Iterate through the matrix and group elements by `i - j`.
2. Traverse the anti-diagonals in order, reversing as needed.
3. Collect the result.

#### Example

Input:
```
[[1,2,3],
 [4,5,6],
 [7,8,9]]
```

Grouping by `i - j`:
- Key 0: [1,5,9]
- Key -1: [2,6]
- Key 1: [4,8]
- Key -2: [3]
- Key 2: [7]

Output (one possible anti-diagonal order):
```
[1,5,9,2,6,4,8,3,7]
```

---

## General Strategy for Matrix Traversal Problems

Matrix traversal problems often require visiting elements in a specific order (row-wise, column-wise, diagonal, spiral, zigzag, etc.). Here are steps and tips to solve any such problem:

### Steps
1. **Understand the Traversal Pattern:**  
   - Identify how elements should be visited (e.g., by row, column, diagonal, spiral).
2. **Index Mapping:**  
   - Find a formula or mapping for indices (e.g., `i + j` for diagonals, boundaries for spiral).
3. **Data Structure Choice:**  
   - Use appropriate structures (arrays, maps, stacks, queues) to store intermediate results.
4. **Edge Cases:**  
   - Consider empty matrices, single row/column, non-square matrices.
5. **Result Construction:**  
   - Build the output in the required order, handling reversals or direction changes as needed.

### Template Approach

```js
function traverseMatrix(matrix) {
    // 1. Check for empty matrix
    if (!matrix || !matrix.length || !matrix[0].length) return [];

    // 2. Initialize result and any helper structures
    const result = [];
    // ...initialize helpers...

    // 3. Main traversal logic
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            // ...apply mapping or pattern...
        }
    }

    // 4. Post-process if needed (reverse, flatten, etc.)
    // ...post-processing...

    return result;
}
```

### Tips for Future Problems
- **Draw diagrams** to visualize traversal.
- **Write out small examples** to spot patterns.
- **Break down the problem** into smaller steps.
- **Reuse helper functions** for common patterns (e.g., spiral, diagonal).
- **Test edge cases** early.

---

_Use this strategy and template for any matrix traversal problem to quickly identify the pattern and implement a solution._