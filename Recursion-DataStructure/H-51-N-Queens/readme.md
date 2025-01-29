## How to approach this problem

We use a backtracking approach to solve the problem:

1. Place Queens Column by Column:

- Start from the first column and try placing a queen in each row.

- If a queen can be placed safely, move to the next column.

- If no safe position is found, backtrack and try a different row in the previous column.

2. Check for Safety:

- Before placing a queen, ensure that no other queen is attacking it:

  - Row Check: Ensure no queen is present in the same row to the left of the current column.

  - Upper Diagonal Check: Ensure no queen is present on the upper diagonal (moving up and to the left).

  - Lower Diagonal Check: Ensure no queen is present on the lower diagonal (moving down and to the left).

3. Backtracking:

- If a queen is placed successfully, recurse to the next column.

- If all queens are placed successfully, add the board configuration to the result.

- If no safe position is found, backtrack by removing the queen and try the next row.

![SC-1](https://gist.github.com/user-attachments/assets/9ad3a9b4-2457-4c0a-84a1-e965185c70c2)
![SC-2](https://gist.github.com/user-attachments/assets/887bb919-e2c8-484a-aed9-a4f8ba682796)
![SC-3](https://gist.github.com/user-attachments/assets/148affa6-fe1c-42b2-acd1-db1704c582cb)
