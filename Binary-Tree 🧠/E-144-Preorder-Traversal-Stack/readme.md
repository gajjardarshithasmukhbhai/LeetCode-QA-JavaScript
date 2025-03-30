# Dry Run of `preorderTraversal` Function

## **Sample Binary Tree**

   1
  / \
 2   3
/ \   \
4  5   6



### **Tree Representation in Code**
```js
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);
```


**Step-by-Step Execution**

## Iteration 1
```js
value = stack.pop() = 1

preOrder.push(1) → [1]

Push value.right (3) → stack = [3]

Push value.left (2) → stack = [3, 2]

```

## Iteration 2

```js
value = stack.pop() = 2

preOrder.push(2) → [1, 2]

Push value.right (5) → stack = [3, 5]

Push value.left (4) → stack = [3, 5, 4]
```

## Iteration 3

```js
value = stack.pop() = 4

preOrder.push(4) → [1, 2, 4]

value.left and value.right are null, so nothing is pushed.

stack = [3, 5]
```

## Iteration 4
```js

value = stack.pop() = 5

preOrder.push(5) → [1, 2, 4, 5]

value.left and value.right are null, so nothing is pushed.

stack = [3]
```

## Iteration 5
```js
value = stack.pop() = 3

preOrder.push(3) → [1, 2, 4, 5, 3]

Push value.right (6) → stack = [6]

value.left is null, so nothing is pushed.
```

## Iteration 6

```js
value = stack.pop() = 6

preOrder.push(6) → [1, 2, 4, 5, 3, 6]

value.left and value.right are null, so nothing is pushed.

stack = [] (loop ends)
```