# Reverse Pairs - Efficient Approach Using Merge Sort

## Problem Definition

We are tasked with counting "reverse pairs" in an array `nums`. A reverse pair is defined as:
\[ \text{nums[i]} > 2 \times \text{nums[j]} \]
where \( i < j \).

## Approach: Merge Sort with Modification

### Key Idea

We use the **divide and conquer** strategy of merge sort to count reverse pairs while sorting the array.

1. **Divide**:

   - Recursively divide the array into two halves until each subarray contains a single element.

2. **Conquer (Merge)**:

   - While merging two sorted arrays `left` and `right`:
     - Count the reverse pairs between the two arrays.
     - Merge the arrays in ascending order.

3. **Reverse Pair Counting**:
   - While merging:
     - For each element \( \text{right[j]} \) in the right array, find the first element \( \text{left[i]} \) in the left array such that:
       \[ \text{left[i]} \leq 2 \times \text{right[j]} \]
     - All remaining elements in the left array starting from \( i \) satisfy the reverse pair condition with \( \text{right[j]} \).

---

### Algorithm

1. **Merge Function**:

   - Count reverse pairs between `left` and `right`.
   - Merge the two arrays into a single sorted array.

2. **Merge Sort Function**:
   - Base case: If the array has \( \text{length} \leq 1 \), return it.
   - Recursive case:
     - Divide the array into two halves: `left` and `right`.
     - Call `mergeSort` on both halves.
     - Count reverse pairs while merging the sorted halves using the `merge` function.

---

### Code

```javascript
var reversePairs = function (nums) {
  let count = 0;

  // Merge function to count reverse pairs and merge two sorted arrays
  const merge = (left, right) => {
    let i = 0,
      j = 0;
    let result = [];

    // Count reverse pairs
    while (i < left.length && j < right.length) {
      if (left[i] > 2 * right[j]) {
        count += left.length - i; // All elements in left[i:] satisfy the condition
        j++;
      } else {
        i++;
      }
    }

    // Merge two sorted arrays
    i = 0;
    j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    // Add remaining elements from both arrays
    while (i < left.length) result.push(left[i++]);
    while (j < right.length) result.push(right[j++]);

    return result;
  };

  // Merge Sort function
  const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  };

  mergeSort(nums);
  return count;
};

console.log(reversePairs([5, 4, 3, 2, 1])); // Output: 4
```

Example Walkthrough
Input: [5, 4, 3, 2, 1]

1. Divide:

- Split into [5, 4, 3] and [2, 1].
- Further split into [5, 4] and [3], then [2] and [1].

2. Conquer (Merge and Count):

- Merge [5] and [4] into [4, 5].
- Merge [4, 5] and [3] into [3, 4, 5].
- Merge [2] and [1] into [1, 2].
- Merge [3, 4, 5] and [1, 2]:
  Count reverse pairs:
  {(3,1),(4,1),(5,1),(4,2),(5,2)}=4.
  Final sorted array: [1, 2, 3, 4, 5].
  Output: 4

Complexity:

Time Complexity:

- 𝑂(𝑛log𝑛)
- O(nlogn)

Merge sort requires

- 𝑂(𝑛log𝑛)
- O(nlogn), and counting reverse pairs during merge is 𝑂(𝑛)
- O(n) for each step.

- Space Complexity:
  𝑂(𝑛)
  O(n)

Temporary arrays used for merging.

Key Advantage:
The merge sort approach avoids the brute-force

𝑂(𝑛^2)

O(n^2) method by efficiently counting reverse pairs while maintaining

𝑂(𝑛log𝑛)
O(nlogn) complexity.
