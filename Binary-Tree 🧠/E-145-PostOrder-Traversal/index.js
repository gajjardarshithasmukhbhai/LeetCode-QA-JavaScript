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
const postorderTraversal = (root) => {
    // PostOrder Traversal
    // Consider Left, Right and Root
    // Edge Case: If Root is Empty, so in that case

    const postOrder = [];
    let stack = [];


    if(!root) {
        return [];
    }

    while(stack.length || root) {
        if(root) {
            stack.push(root);
            root=root.left;
        }
        else {
            let temp = stack[stack.length-1].right;

            if(!temp) {
                temp = stack.pop();
                postOrder.push(temp.val);

                while(stack.length && temp === stack[stack.length-1].right) {
                    temp = stack.pop();
                    postOrder.push(temp.val);
                }
            } else {
                root = temp;
            }
        }
    }
    return postOrder;
};