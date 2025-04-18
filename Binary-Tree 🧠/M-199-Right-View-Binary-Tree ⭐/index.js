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
const rightSideView = (root) => {
    const stack = [];
    if(root === null)  return [];
     
    const helper = (node, level) => {

        if(node!==null) return;

        if(stack[level] === undefined ) {
            stack.push(node.val);
        }
        helper(node.right, level+1);
        helper(node.left, level+1)
    }
    helper(root, 0);
};