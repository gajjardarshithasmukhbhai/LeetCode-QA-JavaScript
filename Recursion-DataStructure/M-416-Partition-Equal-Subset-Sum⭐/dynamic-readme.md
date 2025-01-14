# Detailed Approach: Dynamic Programming (Memoization) for Subset Partition Problem

The problem is to determine if a given set can be partitioned into two subsets with equal sums. We can solve this using a dynamic programming approach with memoization.

## Steps in the Approach:

### Step 1: **Calculate the Total Sum of the Array**

- The first step is to calculate the total sum of the array (`totalValue`).
- If the sum is **odd**, it is impossible to partition the array into two subsets with equal sums, so we immediately return `false`.

### Step 2: **Set the Target Sum**

- If the total sum is even, the target sum for each subset is `target = totalValue / 2`.
- This is the sum that we need to reach for one subset, and the other subset will automatically have the same sum.

### Step 3: **Memoization Table (Cache)**

- We use a `Map` called `memo` to store results for subproblems. The key is a combination of the current `index` and `sum` of the elements considered so far.
- The `memo` table prevents redundant calculations by caching the result of previously computed states.

### Step 4: **Recursive Helper Function**

We define a helper function `helper(index, sum)` to explore the decision tree recursively. The function has the following logic:

1. **Base Case: Subset Found**:

   - If the current `sum` equals the `target`, return `true` because we’ve found a valid subset that sums up to half of the total value.

2. **Invalid State**:

   - If the `index` exceeds the array length or the `sum` exceeds the target, return `false` (this path is invalid).

3. **Memoization Check**:

   - Before proceeding further, we check if the result for the current state (`index`, `sum`) is already computed. If it is, return the cached result.

4. **Recursive Case: Include or Exclude Current Element**:

   - **Include the current element**: Add the element at `arr[index]` to the sum and move to the next element by calling `helper(index + 1, sum + arr[index])`.
   - **Exclude the current element**: Skip the current element and try the next element by calling `helper(index + 1, sum)`.

5. **Memoization Update**:
   - If either including or excluding the current element leads to a valid partition (returns `true`), store the result as `true` in the memoization table.
   - If both paths fail, store the result as `false`.

### Step 5: **Final Decision**

- The function starts by calling `helper(0, 0)`, meaning starting at index 0 and with an initial sum of 0.
- The function returns `true` if a valid partition is found, otherwise `false`.

---

## Code Walkthrough for Input `[1, 6, 5, 8, 4]`

1. **Initial Setup**:

   - Total Sum = `1 + 6 + 5 + 8 + 4 = 24`.
   - Target Sum = `24 / 2 = 12`.

2. **Recursive Exploration**:

   - We start at `index = 0` with `sum = 0`.
   - The recursive function explores all subsets by either including or excluding each element.
   - If at any point the `sum` equals the `target` (12), the function will return `true`.

3. **Memoization**:

   - The memoization table stores intermediate results to avoid recalculating the same states, improving efficiency.

4. **Result**:
   - Eventually, the recursion finds that we can form a subset with sum `12` by including `[6, 5, 1]`.
   - The function returns `true`.

---

## Complexity Analysis

1. **Time Complexity**:

   - The time complexity is `O(n * target)` where `n` is the number of elements in the array and `target` is the sum of half the total value.
   - This is because the function explores each possible state, but memoization ensures each state is computed only once.

2. **Space Complexity**:
   - The space complexity is `O(n * target)` due to the memoization table, where each entry represents a unique combination of index and sum.

---

### Example:

#### Input: `[1, 6, 5, 8, 4]`

- Total Sum = `24`, Target = `12`
- The function will return `true`, as we can partition the array into two subsets with equal sum: `[6, 5, 1]` and `[8, 4]`.

#### Input: `[1, 2, 3, 5]`

- Total Sum = `11`, Target = `5.5` (non-integer)
- The function immediately returns `false` as partitioning is not possible.
