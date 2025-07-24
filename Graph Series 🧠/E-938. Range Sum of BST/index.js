const rangeSumBST = (root, low, high) =>{
    let result = 0;

    const dfs = (node) => {
        if(!node) {
            return
        }

        if(node.val >= low) {
            dfs(node.left);
        }

        if(node.val > low && node.val < high) {
            result +=node.val;
        }
        
        if(node.val <= high) {
            dfs(node.right);
        }
    }
    dfs(root);
    return result;
};