/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// Not Understand Much :-->
const lowestCommonAncestor = function(root, p, q) {
    const helper = (node, ancestor1, ancestor2) => {
                
        if(node === null || node === ancestor1 || node === ancestor2) {
            return node;
        }

        let left = helper(node.left, ancestor1, ancestor2);
        let right = helper(node.right, ancestor1, ancestor2);

        if(left === null) return right;
        else if(right === null) return left;
        else return node;      
    }

    return helper(root, p, q);
}