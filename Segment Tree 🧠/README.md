# Segment Tree - Detailed Revision Guide

## What is a Segment Tree?

A segment tree is a binary tree data structure that helps efficiently answer range queries (like sum, min, max) and perform updates on an array. Each node of the tree represents a segment (subarray) of the original array.

## Why Use Segment Trees?

- **Efficient Queries:** Answer range queries in O(log n) time.
- **Efficient Updates:** Update elements and propagate changes in O(log n) time.
- **Flexible:** Can be adapted for sum, min, max, gcd, etc.

## Example Array

Let's use the array: `[2, 6, 1, 4, 7, 3]`

## Segment Tree Structure

Each node covers a range `[start, end]` and stores an aggregate value (e.g., sum).

### Diagram (Sum Segment Tree)

```
                [0,5]:23
               /         \
         [0,2]:9       [3,5]:14
         /    \         /     \
    [0,1]:8 [2,2]:1 [3,4]:11 [5,5]:3
    /   \           /   \
[0,0]:2 [1,1]:6 [3,3]:4 [4,4]:7
```

- `[0,5]:23` means sum of indices 0 to 5 is 23.
- Leaf nodes represent individual elements.

## Building the Tree (Step-by-Step)

1. Start with the whole range `[0,5]`.
2. Split into `[0,2]` and `[3,5]`.
3. Continue splitting until each node covers one element.

## Query Example

**Find sum from index 1 to 4:**

- Traverse nodes covering `[1,4]`.
- Use `[1,1]:6`, `[2,2]:1`, `[3,4]:11`.
- Total sum: `6 + 1 + 11 = 18`.

## Update Example

**Change index 4 from 7 to 10:**

- Update `[4,4]` to 10.
- Update parent `[3,4]` to `4 + 10 = 14`.
- Update `[3,5]` to `14 + 3 = 17`.
- Update root `[0,5]` to `9 + 17 = 26`.

## LeetCode Problems - Detailed Categories

### 1. Range Sum Queries
**Problem Pattern:** Given an array, answer multiple queries for sum of elements in range [i, j].

**Example Problems:**
- **Range Sum Query - Mutable (LC 307):** Update elements and query range sums
- **Range Sum Query 2D - Mutable (LC 308):** 2D version with matrix updates
- **Count of Range Sum (LC 327):** Count subarrays with sum in given range

**When to Use:** When you have frequent updates and range sum queries.

### 2. Range Minimum/Maximum Queries (RMQ)
**Problem Pattern:** Find minimum or maximum element in any given range.

**Example Problems:**
- **Range Minimum Query:** Find min element in range [i, j]
- **Sliding Window Maximum (LC 239):** Can use segment tree approach
- **Maximum Subarray Sum in Range:** Find max sum in given range

**Segment Tree Diagram for Min Queries:**
```
Array: [3, 1, 5, 2, 4, 6]
              [0,5]:1
             /       \
       [0,2]:1     [3,5]:2
       /    \       /    \
   [0,1]:1 [2,2]:5 [3,4]:2 [5,5]:6
   /   \           /   \
[0,0]:3 [1,1]:1 [3,3]:2 [4,4]:4
```

### 3. Dynamic Array Problems
**Problem Pattern:** Array elements change frequently, need efficient queries.

**Example Problems:**
- **Count of Smaller Numbers After Self (LC 315)**
- **Reverse Pairs (LC 493):** Count pairs where arr[i] > 2 * arr[j]
- **Range Frequency Queries:** Count occurrences in range

### 4. Coordinate Compression Problems
**Problem Pattern:** Large coordinate space, but few actual points.

**Example Problems:**
- **The Skyline Problem (LC 218):** Can use segment tree for height queries
- **Rectangle Area II (LC 850):** Calculate total area covered by rectangles
- **My Calendar III (LC 732):** Find maximum booking overlap

### 5. Lazy Propagation Problems
**Problem Pattern:** Range updates along with range queries.

**Example Problems:**
- **Range Addition (LC 370):** Add value to all elements in range
- **Corporate Flight Bookings (LC 1109):** Similar to range addition
- **Range Sum Query - Mutable with Range Updates**

**Lazy Propagation Example:**
```
Add 5 to range [1,3] in array [2, 6, 1, 4, 7, 3]

Before:         After (lazy marked):
[0,5]:23       [0,5]:23, lazy:0
              /              \
        [0,2]:9           [3,5]:14
        lazy:3            lazy:1
     (affects 2 elements) (affects 1 element)
```

### 6. Binary Indexed Tree vs Segment Tree
**When to choose Segment Tree:**
- Need range min/max (not just sum)
- Complex operations (like GCD, XOR)
- Range updates with lazy propagation
- 2D range queries

**When BIT is better:**
- Only range sum queries
- Simpler implementation needed
- Memory constraints (BIT uses less space)

### 7. Advanced Segment Tree Variants

**Persistent Segment Tree:**
- **Kth Smallest in Range:** Find kth smallest element in range
- **Range Distinct Count:** Count distinct elements in range

**2D Segment Tree:**
- **2D Range Sum:** Sum of elements in rectangle
- **2D Range Min:** Minimum in rectangular region

### 8. Problem Identification Tips

**Use Segment Tree when you see:**
- "Range queries" + "Point/Range updates"
- "Mutable array" + "Multiple queries"
- Need O(log n) for both query and update
- Online queries (can't preprocess all queries)

**Don't use when:**
- Only single type of query without updates
- Offline queries (can sort/preprocess)
- Simple problems solvable with prefix sums

### 9. Implementation Patterns

**Basic Structure Recognition:**
```
class SegmentTreePattern:
    def __init__(self, array):
        # Initialize tree array (size 4*n)
        # Build tree recursively
        
    def build(self, node, start, end):
        # Base case: leaf node
        # Recursive case: build left and right
        
    def query(self, node, start, end, query_start, query_end):
        # No overlap: return neutral value
        # Complete overlap: return node value  
        # Partial overlap: query both children
        
    def update(self, node, start, end, index, value):
        # Leaf node: update value
        # Internal node: update child, then recalculate
```

## Complexity

- **Build:** O(n)
- **Query:** O(log n)
- **Update:** O(log n)

## JavaScript Implementation

### Building the Segment Tree (Function-based Approach)

```javascript
// Global variables for segment tree
let segTree = [];
let nums = [];
let n = 0;

// Initialize segment tree
function initSegmentTree(array) {
    nums = array;
    n = array.length;
    segTree = new Array(4 * n).fill(0);
    buildTree(0, 0, n - 1);
}

function buildTree(i, l, r) {
    // Base case: leaf node
    if (l === r) {
        segTree[i] = nums[r];
        return;
    }
    
    // Recursive case: build left and right subtrees
    let mid = Math.floor((l + r) / 2);
    buildTree(2 * i + 1, l, mid);        // Left child
    buildTree(2 * i + 2, mid + 1, r);    // Right child
    
    // Store sum of children (or min/max based on requirement)
    segTree[i] = segTree[2 * i + 1] + segTree[2 * i + 2];
}

// Query range sum from index ql to qr
function queryRange(i, l, r, ql, qr) {
    // No overlap
    if (ql > r || qr < l) {
        return 0;
    }
    
    // Complete overlap
    if (ql <= l && r <= qr) {
        return segTree[i];
    }
    
    // Partial overlap
    let mid = Math.floor((l + r) / 2);
    let leftSum = queryRange(2 * i + 1, l, mid, ql, qr);
    let rightSum = queryRange(2 * i + 2, mid + 1, r, ql, qr);
    return leftSum + rightSum;
}

// Update single element at index pos to new value
function updatePoint(i, l, r, pos, newVal) {
    if (l === r) {
        segTree[i] = newVal;
        nums[pos] = newVal;
        return;
    }
    
    let mid = Math.floor((l + r) / 2);
    if (pos <= mid) {
        updatePoint(2 * i + 1, l, mid, pos, newVal);
    } else {
        updatePoint(2 * i + 2, mid + 1, r, pos, newVal);
    }
    
    // Update current node after child update
    segTree[i] = segTree[2 * i + 1] + segTree[2 * i + 2];
}

// Helper functions for external use
function query(left, right) {
    return queryRange(0, 0, n - 1, left, right);
}

function update(index, value) {
    updatePoint(0, 0, n - 1, index, value);
}

// Usage example:
const arr = [2, 6, 1, 4, 7, 3];
initSegmentTree(arr);

console.log(query(1, 4));  // Sum from index 1 to 4 = 18
update(2, 10);             // Update index 2 to value 10
console.log(query(1, 4));  // Query again after update = 27

// For minimum queries, modify the buildTree and updatePoint functions:
function buildTreeMin(i, l, r) {
    if (l === r) {
        segTree[i] = nums[r];
        return;
    }
    
    let mid = Math.floor((l + r) / 2);
    buildTreeMin(2 * i + 1, l, mid);
    buildTreeMin(2 * i + 2, mid + 1, r);
    
    // Store minimum of children
    segTree[i] = Math.min(segTree[2 * i + 1], segTree[2 * i + 2]);
}

function queryMin(i, l, r, ql, qr) {
    if (ql > r || qr < l) {
        return Infinity; // Return max value for min queries
    }
    
    if (ql <= l && r <= qr) {
        return segTree[i];
    }
    
    let mid = Math.floor((l + r) / 2);
    let leftMin = queryMin(2 * i + 1, l, mid, ql, qr);
    let rightMin = queryMin(2 * i + 2, mid + 1, r, ql, qr);
    return Math.min(leftMin, rightMin);
}
```

### Key Points for Function-based Approach

- Use global variables `segTree`, `nums`, and `n`
- Initialize with `initSegmentTree(array)`
- All recursive functions take node index and range parameters
- Helper functions provide clean interface
- Easy to modify for different operations (sum, min, max)

## Summary

Segment trees are powerful for range queries and updates. Understanding their structure and traversal is key for solving many LeetCode problems efficiently.