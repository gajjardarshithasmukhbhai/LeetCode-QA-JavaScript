const zigzagLevelOrder = (root) => {

    if(!root) return [];
    
    let leftToRight = true;
    let result = [];
    let nodeQueue = [];

    nodeQueue.push(root);

    // root has no length, so we need to do through nodeQueue
    while(nodeQueue.length!==0) {
        let sizeOfEle = nodeQueue.length;

        const root = new Array(sizeOfEle);
        for(let i=0;i<sizeOfEle;i++) {

            let node = nodeQueue.shift();

            let index = leftToRight ? i: sizeOfEle - i - 1;
            
            root[index] = node.val;

            if(node.left) {
                nodeQueue.push(node.left);
            } 
            if(node.right) {
                nodeQueue.push(node.right);
            }
        }
        
        leftToRight = !leftToRight;
        result.push(root);
    }
    return result;
};
