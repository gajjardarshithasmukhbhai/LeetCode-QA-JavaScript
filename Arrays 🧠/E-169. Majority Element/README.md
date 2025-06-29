# Moore's Voting Algorithm

Moore's Voting Algorithm is a powerful technique to find the majority element in an array (an element that appears more than ⌊n/2⌋ times). It works in linear time O(n) and constant space O(1).

## Intuition

The algorithm is based on the idea of "pairwise cancellation." If we pair each occurrence of the majority element with a different element, the majority element will still have at least one unpaired occurrence left.

- Imagine you have a group of people voting for different candidates.
- The majority candidate will always have more votes than all others combined.
- By "cancelling out" votes for different candidates, the majority will remain at the end.

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

## Why does it work?

- When `count` drops to zero, we pick a new candidate.
- If the majority element exists, it will survive all cancellations and remain as the candidate at the end.
- If no majority exists, the candidate may not be valid, so we must verify.

## Example

Consider the array: `[2, 2, 1, 1, 1, 2, 2]`

- Start: `count = 0`, `candidate = None`
- 1st: 2 → count=1, candidate=2
- 2nd: 2 → count=2
- 3rd: 1 → count=1
- 4th: 1 → count=0
- 5th: 1 → count=1, candidate=1
- 6th: 2 → count=0
- 7th: 2 → count=1, candidate=2

Final candidate is 2. Count its occurrences: 4 (> 3), so 2 is the majority element.

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

## Notes

- This algorithm only works if a majority element is guaranteed to exist, or you must verify the candidate as shown above.
- Time Complexity: O(n)
- Space Complexity: O(1)
