class TreeNode {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right; 
    }
}

const preInPostTraversal = (root) => { 
    // Edge Case: If Root is Empty, so in that case will be return empty Array

    if (!root) return [[], [], []];

    const stack = [];

    // push the root value with 1
    stack.push([root,1]);
    const preOrder = [];
    const inOrder = [];
    const postOrder = [];

    while(stack.length) {
        const [node, num] = stack.pop();

        // This is For PreOrder Traversal
        if(num === 1) {
            preOrder.push(node.val);
            stack.push([node, 2]);
            if(node.left) {
                // Push the Left Child
                stack.push([node.left,1])
            }
        }
        // This is For InOrder Traversal
        else if(num === 2) {
            inOrder.push(node.val);
            
            stack.push([node,3]);
            if(node.right) {
                stack.push([node.right, 1]);
            }
        }
        else {
            postOrder.push(node.val);
        }
    }
    return [preOrder, inOrder, postOrder];
}


//      1
//     / \
//    2   3
//   / \
//  4   5

// Test Case
const root = new TreeNode(1, 
    new TreeNode(2, new TreeNode(4), new TreeNode(5)), 
    new TreeNode(3)
);

const [preOrder, inOrder, postOrder] = preInPostTraversal(root);

console.log("Preorder Traversal:", preOrder);  // [1, 2, 4, 5, 3]
console.log("Inorder Traversal:", inOrder);    // [4, 2, 5, 1, 3]
console.log("Postorder Traversal:", postOrder); // [4, 5, 2, 3, 1]

