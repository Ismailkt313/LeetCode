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
 * @return {boolean}
 */
var isValidBST = function(root) {
   let current = root
   let prev = -Infinity
   let bool = true
   function isValid(current){
    if(!current) return true
    isValid(current.left)
    if(current.val <= prev){
        bool = false
    }
    prev = current.val
    isValid(current.right)
   }
   isValid(root)
   return bool
};
