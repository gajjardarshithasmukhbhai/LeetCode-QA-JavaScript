# Moore's Voting Algorithm

Moore's Voting Algorithm is a powerful technique to find the majority element in an array (an element that appears more than ⌊n/2⌋ times). It works in linear time **O(n)** and constant space **O(1)**.

---

## Intuition

The algorithm is based on the idea of **pairwise cancellation**. If we pair each occurrence of the majority element with a different element, the majority element will still have at least one unpaired occurrence left.

- Imagine you have a group of people voting for different candidates.
- The majority candidate will always have more votes than all others combined.
- By "cancelling out" votes for different candidates, the majority will remain at the end.

---

## Steps

1. **Find a Candidate:**
   - Initialize `count = 0` and `candidate = None`.
   - Traverse the array:
     - If `count == 0`, set `candidate = current element` and `count = 1`.
     - Else if `current element == candidate`, increment `count`.
     - Else, decrement `count`.
   - At the end, `candidate` holds the potential majority element.

2. **Verify the Candidate:**
   - Count the occurrences of `candidate` in the array.
   - If it appears more than ⌊n/2⌋ times, it's the majority element.

---

## Why does it work?

- When `count` drops to zero, we pick a new candidate.
- If the majority element exists, it will survive all cancellations and remain as the candidate at the end.
- If no majority exists, the candidate may not be valid, so we must verify.

---

## Example

Consider the array: `[2, 2, 1, 1, 1, 2, 2]`

| Step | Current | Candidate | Count |
|------|---------|-----------|-------|
| 1    | 2       | 2         | 1     |
| 2    | 2       | 2         | 2     |
| 3    | 1       | 2         | 1     |
| 4    | 1       | 2         | 0     |
| 5    | 1       | 1         | 1     |
| 6    | 2       | 1         | 0     |
| 7    | 2       | 2         | 1     |

Final candidate is 2. Count its occurrences: 4 (> 3), so 2 is the majority element.

---

## Pseudocode

```
function majorityElement(nums):
    count = 0
    candidate = None

    for num in nums:
        if count == 0:
            candidate = num
            count = 1
        else if num == candidate:
            count += 1
        else:
            count -= 1

    // Verify candidate
    count = 0
    for num in nums:
        if num == candidate:
            count += 1

    if count > floor(len(nums) / 2):
        return candidate
    else:
        return -1
```

---

## Notes

- This algorithm only works if a majority element is guaranteed to exist, or you must verify the candidate as shown above.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

---

# 🤔 Why We Need Two Elements for Majority > N/3 (LeetCode 229)

In the problem **LeetCode 229 - Majority Element II**, we are asked to find all elements in an array that appear **more than ⌊n/3⌋ times**.

This is a variation of **Moore's Voting Algorithm**, which is classically used for finding the majority element (appearing more than `n/2` times). However, since the threshold here is `n/3`, the approach requires **tracking two candidates instead of one**.

---

## 📌 Key Insight

If an element appears **more than n/3 times**, how many such elements can exist?

- Suppose we try to have 3 elements each appearing more than ⌊n/3⌋ times.
- Each element count > n/3
- So, Total count > 3 * (n/3) = n

But the array only has `n` elements — so this is **impossible**.

✅ Hence, **at most 2 elements** can appear more than `n/3` times.

---

## 📘 Example: n = 8

```js
nums = [1, 2, 1, 3, 1, 2, 2, 2]

n = 8

⌊n/3⌋ = 2

So we want elements that appear more than 2 times

// Count:
1 → 3 times ✅
2 → 4 times ✅
3 → 1 time ❌

// ✔ Result = [1, 2]

// Trying to include a third number with frequency > 2 would exceed array length:
// 3 elements × 3 times each = 9 > n (8) → ❌ Not possible
```

---

### 🧠 Algorithm Idea for n/3 Majority

We maintain:

- 2 candidates: `candidate1`, `candidate2`
- 2 counters: `count1`, `count2`

This is the generalized Moore’s Voting Algorithm for n/k majority, where k = 3.

**Steps:**
1. First pass: Find up to two candidates using the same cancellation logic.
2. Second pass: Verify the counts of both candidates.

---

## Further Insight

- For majority > n/k, at most (k-1) elements can satisfy the condition.
- This generalization is useful for interview follow-ups and advanced array problems.

---