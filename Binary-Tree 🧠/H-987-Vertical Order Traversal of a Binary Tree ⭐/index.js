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
 * @return {number[][]}
 */

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


const verticalTraversal = (root) => {
    if(!root) return [];
    
    const positionOfNodes = new Map();

    const todo = [{node: root, row: 0, column:0}];

    while(todo.length > 0) {
       const {node, row, column} = todo.shift(); 

       if(!positionOfNodes.has(row)) positionOfNodes.set(row, new Map());
       
       if(!positionOfNodes.get(row).has(column)) positionOfNodes.get(row).set(column, []);
       
       positionOfNodes.get(row).get(column).push(node.val);

       if(node.left) {
        todo.push({node: node.left, row: row-1, column: column+1});
       }

       if(node.right) {
        todo.push({node: node.right, row: row+1, column: column+1});
       }
    }

    const sortedColumns = Array.from(positionOfNodes.keys()).sort((a,b) => a-b);

    const result = [];


    for(const x of sortedColumns) {
        const levelMap = positionOfNodes.get(x);

        const col = [];

        const sortedRows = Array.from(levelMap.keys()).sort((a,b) => a-b);

        for(const y of sortedRows) {
            const values = levelMap.get(y).sort((a,b) => a-b);
            col.push(...values);
        }
        result.push(col);
    }

    return result;

};

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(8);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(0);

root.right.left = new TreeNode(1);
root.right.right = new TreeNode(7);


console.log(verticalTraversal(root));