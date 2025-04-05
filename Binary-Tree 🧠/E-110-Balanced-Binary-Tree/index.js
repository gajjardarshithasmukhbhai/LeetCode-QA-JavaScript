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
 * @return {boolean}
 */
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
 * @return {boolean}
 */
const isBalanced = (nodes) => {
    const helper = (root) => {
        if(!root) return 0;
        let left = helper(root.left);
        let right = helper(root.right);
    
        // edge case only left node, right node is empty or right node is present but left node is empty
    
        if(left == -1 || right === -1 || Math.abs(left-right) > 1) {
            return -1;
        }
        return Math.max(left,right) + 1;
    }
    return helper(nodes) === -1 ? false: true;
};