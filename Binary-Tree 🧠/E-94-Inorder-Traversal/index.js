/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {

    const inOrder = [];
    const stack = [];

    // edge case if value has been empty
    if(!root) return [];

    while(true) {
        if(root!==null) {
            stack.push(root);
            root = root.left;
        } else {
            if(!stack.length) break;
            let node = stack.pop();
            inOrder.push(node.val);
            root = node.right;
        } 
    }  
    return inOrder;
};