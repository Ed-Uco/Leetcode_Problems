const inorderTraversal = function(root) {
    let result = [];

    const ndr = (node) => {
        while (!node) return;
        ndr(node.left);
        result.push(node.val)
        ndr(node.right);
    }

    ndr(root);

    return result;

};