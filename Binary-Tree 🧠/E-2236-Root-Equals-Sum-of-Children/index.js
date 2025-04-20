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
 * In this problem, only three nodes are there. not more that that
 * but If Nodes are more than three. so in that case we need to use general way
 */
const checkTree = (root)=> {
    return root.val === root.left.val + root.right.val;
};

const checkTreeGeneralVersion = (root)=> {
    const helper = (node) => {
        if (!node) return true;
    if (!node.left && !node.right) return true;

    const sum = (node.left ? node.left.val : 0) + (node.right ? node.right.val : 0);

    if (node.val !== sum) return false;
    return helper(node.left) && helper(node.right); 
    }
    return helper(root);
};

