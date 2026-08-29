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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0
    function inOrder(current){
        if(!current) return
        inOrder(current.left)
        if(current.val >= low && current.val <= high){
            sum += current.val
        }
        inOrder(current.right)
    }
    inOrder(root)
    return sum
};