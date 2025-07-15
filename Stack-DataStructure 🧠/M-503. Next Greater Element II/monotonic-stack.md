# 🔁 Next Greater Element in Circular Array using Monotonic Stack

## 📌 Problem Statement

Given a **circular array**, find the **next greater number** for every element. If it doesn’t exist, return `-1`.

---

## 📥 Example Input

```js
nums = [1, 2, 1]
```

### ✅ Expected Output

```js
[2, -1, 2]
```

---

## 🧠 Core Concepts

- Use a **monotonic decreasing stack** to track potential "next greater" elements.
- Iterate **twice** the length of the array in reverse to simulate the **circular array**.
- Use `i % nums.length` to access correct elements while looping backward.

---

## 🔄 Algorithm Explanation

```js
const nextGreaterElements = (nums) => {

    const monotonicArray = [];  // Stack to track possible next greater elements
    const result = [];          // Final result array

    for(let i = 2 * nums.length - 1; i >= 0; i--) {

        // Remove elements that are less than or equal to the current element
        while (
            monotonicArray.length > 0 &&
            nums[i % nums.length] >= monotonicArray[monotonicArray.length - 1]
        ) {
            monotonicArray.pop();
        }

        // Only fill result during the first full pass (not during the circular wrap-around)
        if(i < nums.length) {
            if(monotonicArray.length === 0) {
                result.push(-1);
            } else {
                result.push(monotonicArray[monotonicArray.length - 1]);
            }
        }

        // Push current element to stack for future elements to use
        monotonicArray.push(nums[i % nums.length]);
    }

    return result.reverse(); // reverse because we traversed from end to start
}
```

---

## 🧪 Dry Run Example

For `nums = [1, 2, 1]`, simulate the loop:

| i  | i % n | nums[i % n] | Stack Before | Stack After | Result (if i < n) |
|----|-------|-------------|--------------|-------------|-------------------|
| 5  | 2     | 1           | []           | [1]         | -                 |
| 4  | 1     | 2           | [1]          | [2]         | -                 |
| 3  | 0     | 1           | [2]          | [2,1]       | -                 |
| 2  | 2     | 1           | [2,1]        | [2,1,1]     | 2                 |
| 1  | 1     | 2           | [2,1,1]      | [2,2]       | -1                |
| 0  | 0     | 1           | [2,2]        | [2,2,1]     | 2                 |

✅ After reversing: `[2, -1, 2]`

---

## ✅ Final Output

```js
console.log(nextGreaterElements([1, 2, 1]));
// Output: [2, -1, 2]
```

---

## 📌 Summary

| Concept             | Used In Code         |
|---------------------|----------------------|
| Circular Array      | `i % nums.length`    |
| Monotonic Stack     | `monotonicArray`     |
| Reverse Traversal   | `for (i = 2n-1; i>=0)` |
| Store Results Once  | `if (i < nums.length)` |
| Reverse Final Result| `result.reverse()`   |

This approach ensures **O(n)** time complexity and handles circular conditions efficiently.

