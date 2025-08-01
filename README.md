# LeetCode Quote

```javascript
console.log(
  "Don't run behind number of questions on LeetCode. Try to learn concept first. If you know the concept, question will be fun for you"
);
```

## Daily LeetCode Practice in JavaScript

Welcome to my Daily LeetCode Practice repository! In this repository, I'll be regularly solving LeetCode problems using JavaScript. The primary focus of my daily practice includes solving problems related to arrays, strings, data structures, and algorithms. Each day, I will add a new solution to this repository, and you can find the code for that day in its corresponding folder.

## What's Inside

- **Array Challenges:** Solutions to various LeetCode array-related problems.
- **String Challenges:** Solutions to problems that involve string manipulation.
- **Data Structures:** Implementations of common data structures in JavaScript.
- **Algorithms:** Implementations of well-known algorithms for problem-solving.

## How to Use This Repository

Feel free to explore the code and solutions as a reference for your own LeetCode practice or to learn more about algorithms and data structures. You can find each day's solution in its respective folder within this repository.

## Get Started

To get started, simply explore the folders in this repository, and you'll find the solutions to the LeetCode problems I've tackled. Whether you're a beginner looking to improve your coding skills or an experienced developer seeking to refresh your algorithmic knowledge, I hope you find this repository helpful.

Happy coding and enjoy your LeetCode journey! 🚀

## Track My Progress, Darshit Please Update this Sheet

https://docs.google.com/spreadsheets/d/1EAk9RhWCYQgi26pH23tNjWY52Ff8MKnljsYeyvhcUkA/edit?usp=sharing

https://docs.google.com/spreadsheets/d/1BvNKHb2fRXxFoaLEjvXzlKXRe3I0byHC6Vco41DE0Nc/edit?usp=sharing

- Topic Wise Practices: https://neetcode.io/practice
- Notes of mine: https://gist.github.com/gajjardarshithasmukhbhai/a56a104fb578c8777235e9acf1df7c62

### Time Complexity of Various Algo

![IMG_8640](images/398005613-5f755b20-3c71-4bfd-aa0f-c10f021acf23.png)

![image](images/405746564-95f8af40-5f8d-4c5e-84ae-6a6f44cfbcf4.png)

### Useful Mathematical Equations

- **Number of non-empty contiguous subarrays in an array of length n:**

  ```
  Total subarrays = n * (n + 1) / 2
  ```
  For example, if `n = 5`, then total subarrays = 5 × 6 / 2 = 15.

- **Number of possible subsets of an array of length n (Power Set):**

  ```
  Total subsets = 2^n
  ```
  (Includes the empty set.)

- **Number of ways to choose k elements from n (Combinations):**

  ```
  C(n, k) = n! / (k! * (n - k)!)
  ```

- **Number of permutations of n distinct elements:**

  ```
  P(n) = n!
  ```

- **Sum of first n natural numbers:**

  ```
  S = n * (n + 1) / 2
  ```

- **Sum of first n squares:**

  ```
  S = n * (n + 1) * (2n + 1) / 6
  ```

- **Sum of first n cubes:**

  ```
  S = (n * (n + 1) / 2)^2
  ```

- **Binary Search Time Complexity:**  
  ```
  O(log n)
  ```

- **Merge Sort Time Complexity:**  
  ```
  O(n log n)
  ```

- **Quick Sort Average Time Complexity:**  
  ```
  O(n log n)
  ```

- **Space Complexity for Recursion (call stack):**  
  ```
  O(depth of recursion)
  ```

- **Number of edges in a complete graph with n nodes:**

  ```
  E = n * (n - 1) / 2
  ```

- **Catalan Number (useful for counting BSTs, valid parentheses, etc.):**

  ```
  C_n = (1 / (n + 1)) * C(2n, n)
  ```

- **Fibonacci Sequence (recursive definition):**

  ```
  F(n) = F(n - 1) + F(n - 2)
  F(0) = 0, F(1) = 1
  ```

- **Height of a complete binary tree with n nodes:**

  ```
  h = floor(log2(n))
  ```

### Algorithm & Data Structure Complexity Table

| Algorithm / Data Structure      | Operation         | Time Complexity | Space Complexity | Notes                                 |
|---------------------------------|-------------------|-----------------|------------------|----------------------------------------|
| **Array**                      | Access            | O(1)            | O(n)             | Direct index access                    |
|                                 | Search (unsorted) | O(n)            | O(1)             | Linear search                          |
|                                 | Search (sorted)   | O(log n)        | O(1)             | Binary search                          |
|                                 | Insert/Delete     | O(n)            | O(1)             | At arbitrary position                  |
| **Linked List (Singly)**        | Search            | O(n)            | O(n)             | Traverse from head                     |
|                                 | Insert/Delete     | O(1)            | O(n)             | At head/tail (with tail pointer)       |
| **Stack**                       | Push/Pop          | O(1)            | O(n)             |                                        |
| **Queue**                       | Enqueue/Dequeue   | O(1)            | O(n)             |                                        |
| **Hash Table**                  | Search            | O(1) (avg)      | O(n)             | O(n) worst case (collisions)           |
|                                 | Insert/Delete     | O(1) (avg)      | O(n)             |                                        |
| **Binary Search Tree (BST)**    | Search            | O(log n)        | O(n)             | O(n) worst case (unbalanced)           |
|                                 | Insert/Delete     | O(log n)        | O(n)             |                                        |
| **Balanced BST (AVL/Red-Black)**| Search            | O(log n)        | O(n)             | Always balanced                        |
|                                 | Insert/Delete     | O(log n)        | O(n)             |                                        |
| **Heap (Priority Queue)**       | Insert            | O(log n)        | O(n)             |                                        |
|                                 | Extract-Min/Max   | O(log n)        | O(n)             |                                        |
| **Graph (Adjacency List)**      | Add Edge          | O(1)            | O(V+E)           | V = vertices, E = edges                |
|                                 | Search (BFS/DFS)  | O(V+E)          | O(V)             |                                        |
| **Graph (Adjacency Matrix)**    | Add Edge          | O(1)            | O(V^2)           |                                        |
|                                 | Search (BFS/DFS)  | O(V^2)          | O(V)             |                                        |
| **Sorting Algorithms**          | Bubble Sort       | O(n^2)          | O(1)             |                                        |
|                                 | Selection Sort    | O(n^2)          | O(1)             |                                        |
|                                 | Insertion Sort    | O(n^2)          | O(1)             |                                        |
|                                 | Merge Sort        | O(n log n)      | O(n)             |                                        |
|                                 | Quick Sort        | O(n log n) avg  | O(log n)         | O(n^2) worst case                      |
|                                 | Heap Sort         | O(n log n)      | O(1)             |                                        |
| **Trie**                        | Insert/Search     | O(L)            | O(ALPHABET * N)  | L = word length, N = words             |
