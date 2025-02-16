## Calculation Step-by-Step:

1. helper(1):

- helper(1) calls:
  - helper(0) → returns 1
  - helper(-1) → returns 0
- Therefore, helper(1) = 1 + 0 = 1

2. helper(2):

- helper(2) calls:
  - helper(1) → we've just calculated this as 1
  - helper(0) → returns 1
- Therefore, helper(2) = 1 + 1 = 2

3. helper(3):

- helper(3) calls:
  - helper(2) → 2 (from above)
  - helper(1) → 1 (from above)
- Therefore, helper(3) = 2 + 1 = 3


## Recursive Tree
            helper(3)
           /          \
          /            \
   helper(2)           helper(1)
     /      \              /    \
helper(1) helper(0)   helper(0) helper(-1)
   /    \
helper(0) helper(-1)
