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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = [];
    const stack = [];
    const helper = (node) => {

        if(!node) return; 

        stack.push(node.val);

        if(node.left === null && node.right === null) {
            const getValue = stack.join('->');
            result.push(getValue);
        } 
        else {
            helper(node.left);
            helper(node.right);

        }
        stack.pop(); // For BackTracking
    }
    helper(root);
    return result;
};