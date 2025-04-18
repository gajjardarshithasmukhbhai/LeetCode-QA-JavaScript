const printRootNodePath = (root, findingNum) => {
    const stack = [];
    const helper = (node) => {
        
        if(node === null) return false;
        
        stack.push(node.val);
        
        if(node.val === findingNum) return true;
        
        if(helper(node.left) || helper(node.right)) return true;
        
        stack.pop();

        return false;
    }

    helper(root);
    return stack;
}

// Tree Node constructor
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Create the tree
const root = new TreeNode(1,
    new TreeNode(3,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(2)
);

// Now test
const path = printRootNodePath(root, 5);
console.log(path); // Output: [1, 2, 5]
