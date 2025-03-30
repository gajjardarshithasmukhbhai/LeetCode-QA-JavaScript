const preOrder = (node) => {
    if (!node) return [];

    const preOrder = [];
    const stack = [];

    stack.push(node);

    while (!stack.length) {

        let value = stack.pop();

        preOrder.push(value);

        if (value.right !== null) {
            stack.push(value.right);
        }

        if (value.left !== null) {
            stack.push(value.left);
        }

    }
    return preOrder;

}

