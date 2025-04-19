
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
const widthOfBinaryTree = (root) => {
  
    if(!root) return [];
    
    const nodeQueue = [];

    nodeQueue.push([root,0]);

    let ans = 0;
    while(nodeQueue.length!==0) {

        let size = nodeQueue.length;


        let first = 0;
        let last = 0;

        let minIndex = nodeQueue[0][1];

        for(let i=0;i<size;i++) {
            
            let [node, index] = nodeQueue.shift(); 
            
            let currIndex = index-minIndex;

            if(i===0) {
                first = currIndex;
            }
            if(i==size-1) {
                last = currIndex;
            }
            if(node.left) {
                nodeQueue.push([node.left, 2*currIndex+1]);
            }
            if(node.right) {
                nodeQueue.push([node.right, 2*currIndex+2]);
            }
        }

        ans = Math.max(ans, last-first+1);
    }
    return ans;
};


//  Level Order Format

// const widthOfBinaryTree = (root) => {
  
//     if(!root) return [];
    
//     const nodeQueue = [];

//     nodeQueue.push(root);

//     while(nodeQueue.length!==0) {

//         let size = nodeQueue.length;

//         for(let i=0;i<size;i++) {
            
//             const removedEle = nodeQueue.shift(); 

//             if(removedEle.left!==null) {
//                 nodeQueue.push(removedEle.left);
//             }
//             if(removedEle.right!==null) {
//                 nodeQueue.push(removedEle.right);
//             }
//         }
//     }
// };



