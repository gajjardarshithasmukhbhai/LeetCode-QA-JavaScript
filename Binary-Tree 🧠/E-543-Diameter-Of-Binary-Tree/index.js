const diameterOfBinaryTree = (root) => {
    let max = 0
    const helper = (node) => {
        if(!node) return 0;
        
        let left = helper(node.left);
        let right = helper(node.right);

        max = Math.max(max, left+right);

        return 1 + Math.max(left, right);
    }
    helper(root);
    return max;
};