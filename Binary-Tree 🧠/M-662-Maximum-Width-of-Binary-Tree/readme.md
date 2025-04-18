- width binary tree means between two nodes, how much imaginary nodes are possibles
- condition is leftmost node and rightmost node should not be null

## 🌳 Width of Binary Tree

The **width** of a binary tree is the **maximum width among all its levels**.  
A level's width is defined as the count of nodes between the **leftmost** and **rightmost non-null nodes**, including nulls in between.

### 🔍 Example 1:

    1
  /   \
 3     2
/ \     \
5  3     9

- so in this example width of the binary tree should be 4 
### what to check:

**condition:1**
- Leftmost node 5 is present, rightmost node 9 is present

**condition:2**
- If Leftmost and Rightmost node null, so we can't be consider


### 🔍 Example 2:

       1
     /   \
    3     2
   /       \
  5         9
 /           \
1             3

- so condition 1 and condition 2 satisfy, so total 8 nodes possible because from 3 and 2 imaginary nodes come and further it'll expands.


so For Approach we can use like this:
- For Left ==> (2*i+1)
- For Right ==> (2*i+2)
![IMG_8640](../../images/Maximum-Width-of-Binary-Tree-Code.jpg)

- But in this approach, one catch is there like If value goes to 10^5. so number will exceeded.
- so to solved this Issue, we need to reset the Number like below

![IMG_8640](../../images/L28-Maximum-Width-of-Binary-Tree.jpg)
