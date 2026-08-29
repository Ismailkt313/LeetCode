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
var minDiffInBST = function(root) {
    let current = root
    let diff = 0
    let min = Infinity
    let prev = -Infinity
    function inorder(current){
        if(!current) return
        inorder(current.left)
        if(prev != -Infinity){
            diff = current.val - prev
            if(diff < min){
                min = diff
            }
        }
        prev = current.val
        inorder(current.right)
    }
    inorder(current)
    return min
};