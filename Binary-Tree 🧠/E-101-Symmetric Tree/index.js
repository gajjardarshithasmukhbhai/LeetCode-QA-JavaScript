// symmetric Tree means left <--> right should display same
// so here we can use the Root, Left, Right <--> Root, Right, Left 

const isSymmetric = (root) => {
    const helper = (left, right) => {
        if(left === null || right === null) {
            return right === left;
        }

        if(left.val !== right.val) return false;

        return helper(left.left, right.right) && helper(right.left, left.right);
    }
    return helper(root.left, root.right);
};