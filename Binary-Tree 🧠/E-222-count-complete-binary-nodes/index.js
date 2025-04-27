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
const leftHeightOfBinaryTree = (leftRoot) => {
    let countLeftNode = 0;
    while(leftRoot!== null) {
        countLeftNode++;
        leftRoot = leftRoot.left;
    }
    return countLeftNode;
};
const rightHeightOfBinaryTree = (rightRoot) => {
    let countRightNode = 0;
    while(rightRoot!== null) {
        countRightNode++;
        rightRoot=rightRoot.right;
    }
    return countRightNode;
};

const countNodes = (root) => {
    if(root === null) return 0;
    const helper = (nodes) => {
        if(nodes === null) return 0;
        
        let left = leftHeightOfBinaryTree(nodes);
        let right = rightHeightOfBinaryTree(nodes);

        if(left===right) {
            return Math.pow(2,left)-1; 
        }
        else { 
            return helper(nodes.left) + helper(nodes.right) + 1; 
        }
    }
    return helper(root);
};

