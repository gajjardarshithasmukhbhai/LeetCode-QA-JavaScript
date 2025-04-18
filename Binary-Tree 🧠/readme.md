# Binary Tree Traversal Types

Binary Tree traversal can be broadly categorized into two types:

---

## 1. Recursive Traversal

These use the **call stack** to navigate through nodes. Common depth-first traversal techniques include:

### 🔁 Inorder Traversal (Left ➝ Root ➝ Right)
```js
function inorder(node) {
  if (node == null) return;
  inorder(node.left);
  console.log(node.val);
  inorder(node.right);
}
```

### Preorder Traversal (Root ➝ Left ➝ Right)

```js
function preorder(node) {
  if (node == null) return;
  console.log(node.val);
  preorder(node.left);
  preorder(node.right);
}

```

### Postorder Traversal (Left ➝ Right ➝ Root)

```js
function postorder(node) {
  if (node == null) return;
  postorder(node.left);
  postorder(node.right);
  console.log(node.val);
}
```

### 2. Iterative Traversal(Level Order Traversal)

**Level Order Traversal (Breadth-First using Queue)**

```js
function levelOrder(root) {
  if (root == null) return;
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}
```


| Traversal Type   |      Order      |  Data Structure Used |
|------------------|:---------------:|---------------------:|
| Inorder        |  L ➝ Root ➝ R   |Call Stack(recursion) |
| Preorder |    Root ➝ L ➝ R   |   Call Stack(recursion) |
| Postorder | L ➝ R ➝ Root |    Call Stack (recursion) |
| Level Order | Level by level (BFS) |    Stack, Queue (iterative) |