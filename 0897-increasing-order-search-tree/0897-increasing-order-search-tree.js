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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let val = new TreeNode(0)
    let tree = val
    function inorder(node){
        if(!node) return 
        inorder(node.left)
        tree.right = new TreeNode(node.val)
        tree = tree.right
        inorder(node.right)
    }
    inorder(root)
    return val.right
};