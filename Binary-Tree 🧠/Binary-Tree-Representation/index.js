class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    //  Insert the Value
    insert(value) {
        this.root = this._insertRec(this.root, value);
    }
    _insertRec(node, value) {
        if(node == null) {
            return new TreeNode(value);
        }
        if(value < node.value) {
            node.left = this._insertRec(node.left, value);
        } else {
            node.right = this._insertRec(node.right, value)
        }
        return node;
    }
    inOrder() {
        let result =[];
        this._inOrderRc(this.root, result);
        return result;
    }
    // InOrder Traversal ==> Left, Root, Right
    _inOrderRc(node, result) {
        if(node!==null) {
            this._inOrderRc(node.left, result);
            result.push(node.value);
            this._inOrderRc(node.right, result);
        }
    }
    // PreOrder Traversal ==> Root, Left, Right
    preOrder() {
        let result = [];
        this._preOrderRc(this.root, result);
        return result;
    }
    _preOrderRc(node, result) {
        if(node!==null) {
            result.push(node.value);
            this._preOrderRc(node.left, result);
            this._preOrderRc(node.right, result);
        }
    }

    // PostOrder ==> Left, Right, Root
    postOrder() {
        let result = [];
        this._postOrderRc(this.root, result);
        return result;
    }
    _postOrderRc(node, result) {
        if(node!==null) {
            this._postOrderRc(node.left, result);
            this._postOrderRc(node.right, result);
            result.push(node.value);
        }
    }

    // Search the value in Binary tree
    search(value) {
        return this._searchRc(this.root, value);
    }
    _searchRc(node, value) {
        if(node === null || node.value === value) {
            return node;
        }
        return value < node.value ? this._searchRc(node.left, value): this._searchRc(node.right, value);
    }
}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);


console.log(tree.inOrder()); // [3, 5, 7, 10, 15]
console.log(tree.preOrder()); // [10, 5, 3, 7, 15]
console.log(tree.postOrder()); // [3, 7, 5, 15, 10]
console.log("Search 7:", tree.search(7) ? "Found" : "Not Found"); // Found
console.log("Search 7:", tree.search(27) ? "Found" : "Not Found"); // Not Found