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
 * @return {number}
 */
const maxPathSum = (root) => {
    let max = -Infinity;
    const helper = (node) => {
        if (!node) return 0;
        const left = Math.max(0, helper(node.left));
        const right = Math.max(0, helper(node.right));

        max = Math.max(max, left+right+node.val)
        return node.val + Math.max(left, right);
    };
    helper(root);
    return max;
};