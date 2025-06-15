## 🗳️ Majority Element Generalization using Boyer-Moore Voting Algorithm

This approach is a generalized version of the Boyer-Moore Voting Algorithm to find all elements that appear more than ⌊n / k⌋ times in an array.

### 📊 Max Number of Majority Candidates

| Condition (`> n/k`) | Max Candidates to Track |
|----------------------|--------------------------|
| `> n/2`              | 1                        |
| `> n/3`              | 2                        |
| `> n/4`              | 3                        |
| `> n/k`              | `k - 1`                  |

- For any value of `k`, the number of elements that can appear more than ⌊n / k⌋ times is at most **k - 1**.
- This is due to the **Pigeonhole Principle**: You can't have `k` or more elements each appearing more than `n / k` times in a list of size `n`.

### ✅ Example Use Case

To find elements that appear more than `n / 3` times:

```js
const majorityElement = (nums) => {
    let count1 = 0, count2 = 0;
    let candidate1 = null, candidate2 = null;

    for (let num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    // Verify actual counts
    count1 = 0;
    count2 = 0;
    for (let num of nums) {
        if (num === candidate1) count1++;
        else if (num === candidate2) count2++;
    }

    const result = [];
    const threshold = Math.floor(nums.length / 3);
    if (count1 > threshold) result.push(candidate1);
    if (count2 > threshold) result.push(candidate2);

    return result;
};
```