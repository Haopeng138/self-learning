class TreeNode {
    val;
    left;
    right;
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    // 前序遍历
    static preOrder(root) {
        if (!root) return;
        console.log(root.val);
        TreeNode.preOrder(root.left);
        TreeNode.preOrder(root.right);
    }

    // 中序遍历
    static inOrder(root) {
        if (!root) return;
        TreeNode.inOrder(root.left);
        console.log(root.val);
        TreeNode.inOrder(root.right);
    }

    // 后序遍历
    static postOrder(root) {
        if (!root) return;
        TreeNode.postOrder(root.left);
        TreeNode.postOrder(root.right);
        console.log(root.val);
    }
}

let n1 = new TreeNode(1),
    n2 = new TreeNode(2),
    n3 = new TreeNode(3),
    n4 = new TreeNode(4),
    n5 = new TreeNode(5)

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;

let P = new TreeNode(0);

n1.left = P;
P.left = n2;
n1.left = n2;


TreeNode.preOrder(n1);
console.log('---');
TreeNode.inOrder(n1);
console.log('---');
TreeNode.postOrder(n1);